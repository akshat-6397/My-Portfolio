import React from "react";
const ProjectCard = ({item}) => {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <div className="project-card-content">
          <h3>{item.title}</h3>
          <img src={item.image} alt="nothing"/>
          <p>
           {item.content}
          </p>
          <a href={item.url} target="_blank" rel="noreferrer" ><button className="button_32">Visit Website</button></a>
          <a href={item.github} target="_blank" rel="noreferrer"><button className="button_32">Github Repo</button></a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
