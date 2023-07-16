import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutCard = ({item}) => {

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <div className="about-card-container animation" data-aos="fade-down">
      <div className="content-heading">
        <h3 style={{textAlign: "center", marginTop:"-10px"}}>{item.title}</h3>
        <p style={{marginTop: "10px"}}>
          {item.content}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
