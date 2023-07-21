import "./style.scss";
import { FaGithub } from "react-icons/fa";
import linkedIn from "../Images/LinkedInIcon.webp";
import instagramIcon from "../Images/Instagram.png";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_message: "",
  });

  const handleNameChange = (e) => {
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z\s])?[a-zA-Z\s]*)*$/;
    if (regex.test(e.target.value) || e.target.value === '') {
      setFormData({ ...formData, user_name: e.target.value });
    }
  };

  const handleEmailChange = (e) => {
      setFormData({ ...formData, user_email: e.target.value });
  };

  const handlePhoneChange = (e) => {
    if(e.target.value.length<=10){
        setFormData({...formData, user_phone: e.target.value});
    }
  };

  const validForm = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (formData?.user_name.length<3) {
        toast.error('Wrong Name Input',{position: "bottom-center", theme: "colored"});
        return false;
    }
    if (!regex.test(formData?.user_email) || formData?.user_email.length>20){
        toast.error('Wrong email Input',{position: "bottom-center", theme: "colored"});
        return false;
    }
    if (formData?.user_message.length<5){
        toast.error('Wrong message Input',{position: "bottom-center", theme: "colored"});
        return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem("messageSent")){
        toast.warn("You already sent a message!", {position: "bottom-center",theme: "colored"});
        return;
    }
    if (!validForm()){
        return;
    }
    emailjs.sendForm('service_6mz5d5i', 'template_z7uli7k', e.target, '8b8QCs28V-utbApzg')
    .then((result) => {
        localStorage.setItem("messageSent", true);
        toast.success("Message sent successfully", {position: "bottom-center",theme: "colored"});
    }, (error) => {
        toast.error("Error! Please try again", {position: "bottom-center",theme: "colored"});
    });
  }

  return (
    <div className="contact-form-main-container" id="contact">
      <h1>Contact Me</h1>
      <span>Hey! Leave a message</span>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form" autoComplete="off">
          <label>Name:</label>
          <input
            name="user_name"
            value={formData.user_name}
            type="text"
            required
            autoComplete="off"
            placeholder="Type your name here"
            onChange={handleNameChange}
          />
          <label>Email:</label>
          <input
            name="user_email"
            value={formData.user_email}
            type="email"
            required
            autoComplete="off"
            placeholder="Type your email here"
            onChange={handleEmailChange}
          />
          <label>Phone No.:</label>
          <input
            name="user_phone"
            value={formData.user_phone}
            type="number"
            autoComplete="off"
            placeholder="Type your number here (optional)"
            onChange={handlePhoneChange}
          />
          <label>Message:</label>
          <textarea
            name="user_message"
            value={formData.user_message}
            type="text"
            required
            autoComplete="off"
            placeholder="Type your message here"
            onChange={(e) => setFormData({...formData, user_message: e.target.value})}
          />
          <button type="submit" className="button_32">
            Send
          </button>
        </form>
      </div>
      <div className="icons-container">
        <a
          href="https://www.linkedin.com/in/akshat-mathur-a571a11b5/"
          target="_blank"
          rel="noreferrer"
          className="linkedIn"
        >
          <img src={linkedIn} alt="linkedIn" />
        </a>
        <Link to="https://github.com/akshat-6397" target="_blank">
          <FaGithub className="github" />
        </Link>
        <a
          href="https://www.instagram.com/mathur_.akshat/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="instagram"
        >
          <img src={instagramIcon} alt="linkedIn" />
        </a>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Footer;
