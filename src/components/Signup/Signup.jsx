import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { auth, googleProvider } from "../../conflig/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { FaGoogle, FaApple } from "react-icons/fa";
// toast css link
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [authData, setAuthData] = useState(auth);
  const [display, setDisplay] = useState("signin");
  const signUpSchema = z
    .object({
      email: z.string().email().min(1, "email is required"),
      password: z.string().min(1, "password is required"),
    })
    .refine((data) => data.password.length > 7, {
      message: "password is too small (>8)",
      path: ["password"],
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const registerUser = async (data) => {
    try {
      const req = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(req);
      navigate('/dashboard')
    } catch (error) {
      console.log(error.message);
      toast.warning(error.message);
      reset();
    }
  };
  const signInUser = async (data) => {
    try {
      const req = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(req);
      navigate("/dashboard");
    } catch (err) {
      console.log(err.message);
      toast.warning(err.message);
    }
  };
  const googleSignin = async () => {
    try {
      let req = await signInWithPopup(auth, googleProvider);
      console.log(req);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
      toast.warning(error.message);
    }
  };
  useEffect(() => {
    setTimeout(() => console.log(auth?.currentUser?.email), 1000);
  }, [auth]);
  return (
    <>
      <ToastContainer />

      {display === "signin" ? (
        <div className="userForm">
          <div className="heading">
            <h1>Signin accout</h1>
            <p>Sign in to your account</p>
          </div>
          <div className="externalregister">
            <button onClick={googleSignin}>
              <FaGoogle color="grey"/> Sign in with Google
            </button>
            <button>
              <FaApple color="grey"/> Sign in with Apple
            </button>
          </div>
          <div className="inputFields">
            <form action="" onSubmit={handleSubmit((data) => signInUser(data))}>
              <label htmlFor="">Email address</label>
              <input type="text" placeholder="email" {...register("email")} />
              <p className="errmsg">{errors.email && errors.email.message}</p>
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="password"
                {...register("password")}
              />
              <p className="errmsg">
                {errors.password && errors.password.message}
              </p>
              <NavLink>Forgot password?</NavLink>
              <button>Signin</button>
              <div className="options">
                <p>
                  Don't have account?
                  <NavLink onClick={() => setDisplay("Register")}>
                    Register
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="userForm">
          <div className="heading">
            <h1>Register accout</h1>
            <p>Register your accout</p>
          </div>
          <div className="externalregister">
            <button>
              <FaGoogle color="grey"/> Sign in with Google
            </button>
            <button>
              <FaApple color="grey"/> Sign in with Apple
            </button>
          </div>
          <div className="inputFields">
            <form
              action=""
              onSubmit={handleSubmit((data) => registerUser(data))}
            >
              <label htmlFor="">Email address</label>
              <input type="text" {...register("email")} />
              <p className="errmsg">{errors.email && errors.email.message}</p>
              <label htmlFor="">Password</label>
              <input type="password" {...register("password")} />
              <p className="errmsg">
                {errors.password && errors.password.message}
              </p>
              <button>Register</button>
            </form>
          </div>
          <div className="options">
            <p>
              Already had account?
              <NavLink onClick={() => setDisplay("signin")}>Login</NavLink>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
