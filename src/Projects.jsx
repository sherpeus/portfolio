import React, { useState } from "react";
import Skills from "./skills";

import "./css/Projects.css";
import Project_info from "./Project-card";
import { useFadeIn } from "./fadeIn";
function Projects() {
  const [Index, setIdx] = useState(null);

  // Sort projects by difficulty (assuming numeric: 1=Easy, 2=Medium, 3=Hard)
  const sortedSkills = [...Skills].sort((a, b) => b.difficulty - a.difficulty);
  const loaded=useFadeIn();
  return (
    <div className={`main-projects ${loaded ? "fade-in" : ""}`} id="top">
      <h2>Projects</h2>
      <p>
        I’m focused on deep backend development, systems engineering, machine learning and algorithmic optimization.
        <br />
       
        Each project was built to break apart a foundational engineering challenge and understand it completely. 
        Check them out below. <span className="red">(Click on each project card to view an elaborated explanation)</span>
      </p>

      <div className={`project-container ${Index !== null ? "blurred" : ""}`}>
        {sortedSkills.map((project, i) => (
          <div
            key={i}
            className={`project-card ${Index === i ? "active" : ""}`}
            onClick={() => setIdx(i)}
          >
            <img
              src={"/Images/sample-image2.png"}
              alt={`${project.name} screenshot`}
              className="project-icon"
            />
            <span>{project.name}</span>
          </div>
        ))}
      </div>

      {Index !== null && (
        <div className="focused-project">
          <Project_info idx={Index} project_details={sortedSkills[Index]} onClose={() => setIdx(null)} />
          
        </div>
      )}
    </div>
  );
}

export default Projects;
