import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./css/About.css";

function About() {
  const [loaded, setLoaded] = useState(false);
  const [selected, setSelected] = useState("*");
 const BG_COLOR = "98d4b7";   
const FG_COLOR = "E5EFC1";
  useEffect(() => {
    setLoaded(true);
  }, []);
  const TYPE_COLORS = {
  l: "4F8FC0", 
  t: "53D2DC", 
  c: "26648E"  
};
const getBadgeUrl = (name, logo,type) => {
  const encodedName = encodeURIComponent(name);
   const bg = TYPE_COLORS[type];
  return `https://img.shields.io/badge/${encodedName}-${bg}?style=for-the-badge&logo=${logo}&logoColor=${FG_COLOR}`;
};
  
const languages = [
  { name: "Python", logo: "python",type:"l"},
  { name: "Java", logo: "coffeescript",type:"l" },
  { name: "JavaScript", logo: "javascript",type:"l" },
  { name: "Rust", logo: "rust",type:"l" },
  { name: "SQL", logo: "sqlite",type:"l" },
  { name: "React", logo: "react",type:"l" },
  { name: "Elasticsearch", logo: "elasticsearch",type:"l" },
  { name: "NoSQL", logo: "mongodb",type:"l" }
];

const technologies = [
  { name: "VS Code", logo: "visualstudiocode",type:"t" },
  { name: "Figma", logo: "figma",type:"t" },
  { name: "Git", logo: "git",type:"t" },
  { name: "GitHub", logo: "github",type:"t" },
  { name: "Intellij IDEA", logo: "intellijidea",type:"t" },
  { name: "Flask", logo: "flask",type:"t" },
  { name: "Firebase", logo: "firebase",type:"t" }
];

const concepts = [
  { name: "DSA", logo: "",type:"c" },
  { name: "Machine Learning", logo: "",type:"c" },
  { name: "Deep Learning", logo: "",type:"c" },
  { name: "OOP", logo: "",type:"c" }
];
  return (
    <div className={`about-main ${loaded ? "fade-in" : ""}`}>
      <div className="intro">
        <h2>Hey, I'm <span className="red">Mark Dinol</span></h2>
        <p>
          I’m a competitive programmer, machine learning enthusiast, self-taught painter, and lifelong chess player.  
          Also, a forever Potterhead and proud Percy Jackson fan, because life’s better with a little magic and mythology.  
          Whether I’m solving problems, mixing colors, or strategizing on the chessboard, I love blending logic with creativity.
        </p>
      </div>
    <h3>Skills & tools I'm Familiar with</h3><br/><br/>
      <div className="badges">
        <select id="skills" value={selected} onChange={(e) => setSelected(e.target.value)}>
          <option value="*">All</option>
          <option value="lang">Languages & frameworks</option>
          <option value="tech">Technologies</option>
          <option value="concept">Concepts & principles</option>
        </select>

        <div className="badge-container">
  {(selected === "*" || selected === "lang") && languages.map((skill,i) => (
   <img key={i} src={getBadgeUrl(skill.name, skill.logo,skill.type)} alt={skill.name} style={{borderRadius: "12px",  margin: "4px",       
    cursor:"pointer"}} />
  ))}
  {(selected === "*" || selected === "tech") && technologies.map((skill,i) => (
   <img key={i} src={getBadgeUrl(skill.name, skill.logo,skill.type)} alt={skill.name} style={{borderRadius: "12px",  margin: "4px"       
    ,cursor:"pointer"}} />
  ))}
  {(selected === "*" || selected === "concept") && concepts.map((skill,i) => (
    <img key={i} src={getBadgeUrl(skill.name, skill.logo,skill.type)} alt={skill.name} style={{borderRadius: "12px",  margin: "4px"       
    ,cursor:"pointer"}} />
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
