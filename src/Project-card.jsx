import React, { useEffect } from "react";
import "./css/Project-card.css";


function Project_info({ idx, onClose, project_details }) {


useEffect(() => {
window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);


return (
<div className="card-main">
<button onClick={onClose} id="close-btn">
<i className="fa-solid fa-xmark"></i>
</button>


<h3>{project_details.name}</h3>
<img
src={project_details.img_url || "/Images/sample-image.png"}
className='img'
alt='project'
/>


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
<p>
  {project_details.available ? (
    <a
      href={project_details.link}
      target="_blank"
      rel="noopener noreferrer"
      className='open'
    >
      Open project <i className="fa-solid fa-up-right-from-square"></i>
    </a>
  ) : (
    <span className='close'>
      Not accessible publicly <i className="fa-solid fa-ban"></i>
    </span>
  )}
</p>

</div>
);
}


export default Project_info;