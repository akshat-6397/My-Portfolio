import { LeftSection, RightBody } from "../Header/Header.styles";
import myImage from "../../components/Images/Avatar-wave.png"
import Resume from "../../components/Images/Akshat-Mathur Resume.pdf";
import './style.css';
import 'tachyons';
import { useState } from "react";

const Body = () => {

    const[isExpanded, setIsExpanded] = useState(false);
    return(
        <div className="main-container">
            <LeftSection>
                <div style={{margin: "auto", maxWidth: "500px"}}>
                    <h1>Hello, It's Me</h1>
                    <h1 className="f1 web-text">Akshat Mathur</h1>
                    <h1>And I'm a <span className="orange">Web Developer</span></h1>
                    <p className={isExpanded? 'expanded':'collapsed'}>I am a computer science graduate with a passion for web development, with a strong programming background and expertise in frontend web technologies, I am actively seeking opportunities to apply my skills and contribute to the field.</p>
                    <span style={{cursor: "pointer"}}onClick={() => setIsExpanded(!isExpanded)}>{isExpanded?'Read Less':'...more'}</span>
                    <div className="buttons">
                        <a href={Resume} download="Resume"><button className="button_33">Download CV</button></a>
                        <button className="button_33">Let's Talk</button>
                    </div>
                </div>
            </LeftSection>
            <RightBody>
                <img src={myImage} alt="Avatar_image" />
            </RightBody>
            {/* <About /> */}
            {/* <Skills />
            <Projects />
            <Contacts /> */}
        </div>
    )
};
export default Body;