import React from "react";
import "./style.scss";
import ProjectCard from "./ProjectCard";
import {ProjectsList} from "../About/Data";

const Projects = () => {
    return(
        <div className="project-body-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-cards-container">
            {
                ProjectsList.map((item) => {
                    return <ProjectCard item={item} />
                })
            }
                {/* <ProjectCard /> */}
            </div>
        </div>
    );
};

export default Projects;