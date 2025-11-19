import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./css/About.css";

function About() {
  const [loaded, setLoaded] = useState(false);
  const [selected, setSelected] = useState("*");

  useEffect(() => {
    setLoaded(true);
  }, []);

  const languages = [
    { name: "Python", url: "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=flat" },
    { name: "Java", url: "https://img.shields.io/badge/Java-007396?logo=coffeescript&logoColor=white&style=flat" },
    { name: "JavaScript", url: "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat" },
    { name: "Rust", url: "https://img.shields.io/badge/Rust-000000?logo=rust&logoColor=white&style=flat" },
    {name:"SQL",url:"https://img.shields.io/badge/SQL-00758F?logo=sqlite&logoColor=white&style=flat"},
     { name: "React", url: "https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=flat" }
];

  const technologies = [
    { name: "VS Code", url: "https://img.shields.io/badge/VS%20Code-007ACC?logo=visualstudiocode&logoColor=white&style=flat" },
    { name: "Figma", url: "https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white&style=flat" },
    {name:"git",url:"https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=flat"},
    {name:"GitHub",url:"https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=flat"},
    {name:"Intellij IDEA",url:"https://img.shields.io/badge/IntelliJ%20IDEA-000000?logo=intellijidea&logoColor=white&style=flat"},
    {name:"Flask",url:"https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"},
    {name:"Firebase",url:"https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"}
];

  const concepts = [
    { name: "DSA", url: "https://img.shields.io/badge/DSA-02569B?style=flat" },
    { name: "Machine Learning", url: "https://img.shields.io/badge/Machine%20Learning-102230?style=flat" },
    { name: "Deep Learning", url: "https://img.shields.io/badge/Deep%20Learning-8A2BE2?style=flat" },
    { name: "OOP", url: "https://img.shields.io/badge/OOP-FF6F00?style=flat" },
   
   
  ];

  return (
    <div className={`about-main ${loaded ? "fade-in" : ""}`}>
      <div className="intro">
        <h2>Hey, I'm <span className="red">Mark Dinol</span></h2>
        <p>
          I’m a competitive programmer, machine learning enthusiast, self-taught painter, and lifelong chess player.  
          Also, a forever Potterhead and proud Percy Jackson fan — because life’s better with a little magic and mythology.  
          Whether I’m solving problems, mixing colors, or strategizing on the chessboard, I love blending logic with creativity.
        </p>
      </div>
    <h3>Skills & tools I'm Familiar with</h3><br/><br/>
      <div className="badges">
        <select id="skills" value={selected} onChange={(e) => setSelected(e.target.value)}>
          <option value="*">--All--</option>
          <option value="lang">Languages & frameworks</option>
          <option value="tech">Technologies</option>
          <option value="concept">Concepts & principles</option>
        </select>

        <div className="badge-container">
  {(selected === "*" || selected === "lang") && languages.map((b) => (
    <img key={b.name} src={b.url} alt={b.name} className="badge" />
  ))}
  {(selected === "*" || selected === "tech") && technologies.map((b) => (
    <img key={b.name} src={b.url} alt={b.name} className="badge" />
  ))}
  {(selected === "*" || selected === "concept") && concepts.map((b) => (
    <img key={b.name} src={b.url} alt={b.name} className="badge" />
  ))}
</div>
      </div>

      <div className="contact-sec">
        <p>Have a project or just want to say hi? I’d love to chat!</p> 
        <NavLink to="/contact">
          <button className="contact-b2">Get in Touch</button>
        </NavLink>
      </div>
    </div>
  );
}

export default About;
