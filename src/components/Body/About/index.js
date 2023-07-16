import AboutCard from "./AboutCard";
import { AboutList } from "./AboutList";
import "./styles.css";

const About = () => {

  return (
    <div className="about-main-container">
      <h1>About Me</h1>
      <p>
        <h3>Hi!, My name is Akshat Mathur.</h3>
        <br></br>I am a computer science graduate with a passion for web
        development, with a strong programming background and expertise in
        frontend web technologies, I am actively seeking opportunities to apply
        my skills and contribute to the field. Here are My Experience and Education.
      </p>
      <div className="list-item-container">{AboutList.map((item) => {
        return <AboutCard className="animation" data-aos="fade-up" item={item}/>
      })}
      </div>
    </div>
  );
};

export default About;
