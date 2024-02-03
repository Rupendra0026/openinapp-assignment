import React from "react";
import logo from "../../images/logo2.png";
import "./SideNav.css";
import {
  FaBell,
  FaBook,
  FaCalendar,
  FaCube,
  FaInvision,
  FaSlidersH,
  FaTimes,
  FaUpload,
} from "react-icons/fa";

const SideNav = (props) => {
    const {updateContent,menu,setMenu}=props
  return (
    <>
      <div className={"sideNav"}>
        <div className="logopart">
          <img src={logo} alt="" />
          {
            menu&&menu ? <FaTimes color="grey" onClick={()=> menu && setMenu(!menu)}/>:""
          }
        </div>
        <div className="optionsList">
          <ul>
            <li>
              <div className="item" onClick={()=>{updateContent("dashboard");setMenu&&setMenu(!menu)}}>
                <FaCube className="icons" /> <p>Dashboard</p>
              </div>
            </li>
            <li>
              <div className="item" onClick={()=>{updateContent("uploads");setMenu&&setMenu(!menu)}}>
                <FaUpload className="icons"/> <p>Upload</p>
              </div>
            </li>
            <li>
              <div className="item" onClick={()=>{updateContent("invoice");setMenu&&setMenu(!menu)}}>
                <FaInvision className="icons"/> <p>Invoice</p>
              </div>
            </li>
            <li>
              <div className="item" onClick={()=>{updateContent("schedule");setMenu&&setMenu(!menu)}}>
                <FaBook className="icons"/> <p>Schedule</p>
              </div>
            </li>
            <li>
              <div className="item" onClick={()=>{updateContent("calender");setMenu&&setMenu(!menu)}}>
                <FaCalendar className="icons"/> <p>Calender</p>
              </div>
            </li>
            <li>
              <div className="item" onClick={()=>{updateContent("notification");setMenu&&setMenu(!menu)}}>
                <FaBell className="icons"/> <p>Notification</p>
              </div>
            </li>
            <li>
              <div className="item" onClick={()=>{updateContent("settings");setMenu&&setMenu(!menu)}}>
                <FaSlidersH className="icons"/> <p>Settings</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
