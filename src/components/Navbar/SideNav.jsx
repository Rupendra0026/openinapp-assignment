import React from "react";
import logo from "../../images/logo2.png";
import "./SideNav.css";
import {
  FaBell,
  FaBook,
  FaCalendar,
  FaCube,
  FaIcons,
  FaInvision,
  FaMarkdown,
  FaNotesMedical,
  FaSlidersH,
  FaTimes,
  FaUpload,
} from "react-icons/fa";

const SideNav = (props) => {
    const {updateContent,menu,setMenu}=props
    console.log(menu,setMenu,updateContent)
  return (
    <>
      <div className="sideNav">
        <div className="logopart">
          <img src={logo} alt="" />
          {
            menu&&menu ? <FaTimes onClick={()=> menu && setMenu(!menu)}/>:""
          }
        </div>
        <div className="optionsList">
          <ul>
            <li>
              <div className="item" onClick={()=>updateContent("dashboard")}>
                <FaCube className="icons" /> <p>Dashboard</p>
              </div>
            </li>
            <li>
              <div className="item" onClick={()=>updateContent("uploads")}>
                <FaUpload className="icons"/> <p>Upload</p>
              </div>
            </li>
            <li>
              <div className="item" onClick={()=>updateContent("invoice")}>
                <FaInvision className="icons"/> <p>Invoice</p>
              </div>
            </li>
            <li>
              <div className="item" onClick={()=>updateContent("schedule")}>
                <FaBook className="icons"/> <p>Schedule</p>
              </div>
            </li>
            <li>
              <div className="item" onClick={()=>updateContent("calender")}>
                <FaCalendar className="icons"/> <p>Calender</p>
              </div>
            </li>
            <li>
              <div className="item" onClick={()=>updateContent("notification")}>
                <FaBell className="icons"/> <p>Notification</p>
              </div>
            </li>
            <li>
              <div className="item" onClick={()=>updateContent("settings")}>
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
