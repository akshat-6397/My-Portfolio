import React, { useEffect } from "react";
// import HTML_logo from "../../Images/HTML_logo.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillCard = ({item}) => {

    useEffect(() => {
        AOS.init({duration: 2000});
      },[]);

    return (
        <div className="skill-card-container animation" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img src={item?.image} alt="nothing"/>
            {/* <h4>{item?.title}</h4> */}
        </div>
    );
};

export default SkillCard;