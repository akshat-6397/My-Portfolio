import "./style.scss";
import { FaGithub } from "react-icons/fa";
import linkedIn from "../Images/LinkedInIcon.webp";
import instagramIcon from "../Images/Instagram.png"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="contact-form-main-container" id="contact">
      <h1>Contact Me</h1>
      <span>Hey! Leave a message</span>
      <div className="contact-form-container">
        <form className="contact-form" autoComplete="off">
          <label>Name:</label>
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Type your name here"
          />
          <label>Email:</label>
          <input
            type="email"
            required
            autoComplete="off"
            placeholder="Type your email here"
          />
          <label>Phone No.:</label>
          <input
            type="number"
            autoComplete="off"
            placeholder="Type your number here (optional)"
          />
          <label>Message:</label>
          <textarea
            type="text"
            required
            autoComplete="off"
            placeholder="Type your message here"
          />
          <button type="submit" className="button_32">
            Send
          </button>
        </form>
      </div>
      <div className="icons-container">
            <a href="https://www.linkedin.com/in/akshat-mathur-a571a11b5/" target="_blank" rel="noreferrer" className="linkedIn"><img src={linkedIn} alt="linkedIn" /></a>
          <Link to="https://github.com/akshat-6397" target="_blank"><FaGithub className="github"/></Link>
          <a href="https://www.instagram.com/mathur_.akshat/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noreferrer" className="instagram"><img src={instagramIcon} alt="linkedIn" /></a>
        </div>
    </div>
  );
};

export default Footer;
