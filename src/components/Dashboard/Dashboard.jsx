import React, { useState } from "react";
import SideNav from "../Navbar/SideNav";
import UploadFile from "../Uploadfile/UploadFileUI";
import "./Dashboard.css";
import TopNav from "../Navbar/TopNav";
import logo2 from "../../images/logo2.png";
import {} from "react-icons/fa6"
import { FaBars, FaHamburger, FaOptinMonster } from "react-icons/fa";

const Dashboard = () => {
  const [val, setVal] = useState("uploads");
  const [menu,setMenu]=useState(false)
  let contentComponent;
  let header;
  switch (val) {
    case "uploads":
      contentComponent = <UploadFile />;
      header = "Upload CSV";
      break;
    default:
      contentComponent = <div className="random"><h1>{val}</h1></div>;
  }

  const updateContent = (value) => {
    setVal(value);
  };
  return (
    <>
      <div className="dashboard">
        <div className="navbar">
          <SideNav updateContent={updateContent} />
        </div>
        
        {
          menu ? <div className="responsive">
            <SideNav menu={menu} setMenu={setMenu} updateContent={updateContent}/>
          </div> :""
        }
        <div className="content">
          <div className="nav">
             <div className="mininav">
             {
              menu!=true ?<FaBars className="mininavIcon" onClick={()=>setMenu(true)}/>:""
             }
              <img src={logo2} alt="" width={"70%"} />
             </div>
            <TopNav  />
          </div>
          {contentComponent}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
