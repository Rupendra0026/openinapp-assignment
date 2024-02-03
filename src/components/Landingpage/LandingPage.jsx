import './LandingPage.css'
import Signup from '../Signup/Signup'
import logo from '../../images/logo.png'
import {FaGithub, FaTwitter,FaLinkedin,FaDiscord} from "react-icons/fa"

const LandingPage = () => {
  return (
    <>
    <div className="landing">
    <div className="leftpart" style={{backgroundColor:"#605BFF"}}>
        <img src={logo} alt="logo"/>
        <div className="heading">
        <h1>BASE</h1>
        </div>
        <div className="connections">
            <ul>
                <li><FaGithub size={40}/></li>
                <li><FaTwitter size={40}/></li>
                <li><FaLinkedin size={40}/></li>
                <li><FaDiscord size={40}/></li>
            </ul>
        </div>
    </div>
    <div className="rightpart">
    <Signup/>
    </div>
    </div>
    <div className="footerpart">
            <ul>
                <li><FaGithub size={30} color='grey'/></li>
                <li><FaTwitter size={30} color='grey'/></li>
                <li><FaLinkedin size={30} color='grey'/></li>
                <li><FaDiscord size={30} color='grey'/></li>
            </ul>
        </div>
    </>
  )
}

export default LandingPage