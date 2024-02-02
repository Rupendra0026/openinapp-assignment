import React, { useEffect, useState } from "react";
import { auth } from "../../conflig/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./TopNav.css";
import { FaBell } from "react-icons/fa";


const TopNav = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [load, setLoad] = useState(false);
  const logoutUser = async () => {
    try {
      const req = await signOut(auth);
      setUser("");
      console.log(req);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      if (auth?.currentUser?.email) {
        console.log(auth?.currentUser?.photoURL);
        setUser(auth);
      } else {
        navigate("/");
      }
    }, 1000);
    setLoad(false);
  });

  return (
    <>
      <div className="TopNav">
        <FaBell className="iconbell"/>
        {user?.currentUser?.photoURL ? (
          <img src={user?.currentUser?.photoURL} alt="" />
        ) : (
          <p>{user?.currentUser?.email}</p>
        )}

        {user != "" && <button onClick={logoutUser}>Logout</button>}
      </div>
    </>
  );
};

export default TopNav;
