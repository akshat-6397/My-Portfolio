import React from "react";

const AboutCard = ({item}) => {
  return (
    <div className="about-card-container">
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
