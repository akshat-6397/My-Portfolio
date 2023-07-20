import { LeftSection, RightBody } from "../Header/Header.styles";
import myImage from "../../components/Images/Avatar-wave.png";
import Resume from "../../components/Images/Akshat-Mathur Resume.pdf";
import "./style.css";
import "tachyons";
import About from "./About";
import Skills from "./Skills";
import { HiOutlineDownload } from "react-icons/hi";
import Projects from "./Projects";
import { Link } from "react-scroll";

const Body = () => {
  return (
    <>
      <div className="main-container" id="home">
        <LeftSection>
          <div style={{ margin: "auto", marginTop: "10px", maxWidth: "500px" }}>
            <h1>Hello, It's Me</h1>
            <h1 className="f1 web-text">Akshat Mathur</h1>
            <h1>
              And I'm a <span className="orange">Web Developer</span>
            </h1>
            <p>
              Creating modern and responsive design for web and mobile
            </p>
            <div className="buttons">
              <a href={Resume} download="Resume">
                <button
                  style={{
                    width: "150px",
                    position: "relative",
                    paddingLeft: "5px",
                  }}
                  className="button_33"
                >
                  Download CV{" "}
                  <HiOutlineDownload
                    style={{ position: "absolute", top: "10px", right: "14px" }}
                  />
                </button>
              </a>
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-120} duration={500}><button className="button_33">Let's Talk</button></Link>
            </div>
          </div>
        </LeftSection>
        <RightBody>
          <img src={myImage} alt="Avatar_image" />
        </RightBody>
      </div>
      <About />
      <Skills />
      <Projects />
    </>
  );
};
export default Body;
