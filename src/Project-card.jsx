import React from 'react';
import "./css/Project-card.css";
import Skills from './skills';
import { useState } from 'react';

function Project_info({idx,onClose,project_details}){
    
    
    return(
        
        <div className='card-main'>
            <button onClick={onClose} id='close-btn'><i class="fa-solid fa-xmark"></i></button>
            
            <h3>{project_details.name}</h3>
            <img src={project_details.img_url|| "/Images/sample-image.png"} className='img'></img>
            <h3>About</h3>
            <p>{project_details.description}</p>
            <h3>Technologies & Skills</h3>
            <div className="techno">
            <ul>
      {project_details.technology.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </div>
            <h3>Available at</h3>
            <p>{project_details.available?<span className='open'> Open project <i class="fa-solid fa-up-right-from-square "></i></span>:<span className='close'>Not accessible publicly <i class="fa-solid fa-ban"></i></span>}</p>
        </div>
    )

}
export default Project_info;