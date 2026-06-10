import React, { useState } from "react";
import Skills from "./skills";

import "./css/Projects.css";
import Project_info from "./Project-card";
import { useFadeIn } from "./fadeIn";

function Projects() {

  const [activeProjectName, setActiveProjectName] = useState(null);
  const [filter, setFilter] = useState("all"); 


  const sortedSkills = [...Skills].sort((a, b) => b.difficulty - a.difficulty);


  const filteredProjects = sortedSkills.filter((project) => {
    if (filter === "all") return true;
    return project.type === filter;
  });

  const selectedProjectDetails = sortedSkills.find(p => p.name === activeProjectName);

  const loaded = useFadeIn();

  return (
    <div className={`main-projects ${loaded ? "fade-in" : ""}`} id="top">
      <h2>Projects & Implementations</h2>
      <p>
        I’m focused on deep backend development, systems engineering, machine learning and algorithmic optimization.
        <br />
        Each project was built to break apart a foundational engineering challenge and understand it completely. 
        Check them out below. <span className="red">(Click on each project card to view an elaborated explanation)</span>
      </p>

   
      <div className="filter-container">
        <button 
          className={filter === "all" ? "active-filter" : ""} 
          onClick={() => { setFilter("all"); setActiveProjectName(null); }}
        >
          All
        </button>
        <button 
          className={filter === "project" ? "active-filter" : ""} 
          onClick={() => { setFilter("project"); setActiveProjectName(null); }}
        >
          Full Projects
        </button>
        <button 
          className={filter === "concept" ? "active-filter" : ""} 
          onClick={() => { setFilter("concept"); setActiveProjectName(null); }}
        >
          Concepts
        </button>
      </div>


      <div className={`project-container ${activeProjectName !== null ? "blurred" : ""}`}>
        {filteredProjects.map((project) => (
          <div
            key={project.name}
            className={`project-card ${activeProjectName === project.name ? "active" : ""}`}
            onClick={() => setActiveProjectName(project.name)}
          >
          
            <span className={`project-badge ${project.type}`}>
              {project.type === "project" ? "Project" : "Concept"}
            </span>

            <img
              src={"/Images/sample-image2.png"}
              alt={`${project.name} screenshot`}
              className="project-icon"
            />
            <span>{project.name}</span>
          </div>
        ))}
      </div>

     
      {activeProjectName !== null && selectedProjectDetails && (
        <div className="focused-project">
         
          <Project_info 
            idx={sortedSkills.findIndex(p => p.name === activeProjectName)} 
            project_details={selectedProjectDetails} 
            onClose={() => setActiveProjectName(null)} 
          />
        </div>
      )}
    </div>
  );
}

export default Projects;