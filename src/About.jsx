import React from "react";
import "./css/About.css";
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";

function About(){
    const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
    return(
    <div className={`about-main ${loaded ? 'fade-in' : ''}`}>
        <div className="intro">
        <h2>Hey, I'm <span className="red">Mark Dinol</span></h2>
        <p >
         I’m a competitive programmer, machine learning enthusiast, self-taught painter, and lifelong chess player.  
  Also, a forever Potterhead and proud Percy Jackson fan — because life’s better with a little magic and mythology.  
  Whether I’m solving problems, mixing colors, or strategizing on the chessboard, I love blending logic with creativity.
        </p>

        </div>
        <div className="skills">
            <h3>Skills & Tools I'm familiar with</h3>
            
             <div className="bar">
                <div className="inside"  style={{ width: '100%' }}>
                     Python <i class="fa-brands fa-python"></i>
                </div>
               
            </div>
             <div className="bar">
                <div className="inside"  style={{ width: '95%' }}>
                     HTML,CSS & JS <i class="fa-brands fa-html5"></i> <i class="fa-brands fa-css3-alt"></i> <i class="fa-brands fa-js"></i>
                </div>
               
            </div>
             <div className="bar">
                <div className="inside"  style={{ width: '89%' }}>
                     React <i class="fa-brands fa-react"></i>
                </div>
               
            </div>
             <div className="bar">
                <div className="inside"  style={{ width: '75%' }}>
                    Git & Github <i class="fa-brands fa-github"></i>
                </div>
                
            </div>
             <div className="bar">
                <div className="inside"  style={{ width: '93%' }}>
                    Java <i class="fa-brands fa-java"></i>
                </div>
                
            </div>
             <div className="bar">
                <div className="inside"  style={{ width: '75%' }}>
                    SQL <i class="fa-solid fa-database"></i>
                </div>
                
            </div>
            <NavLink to="/projects"> <p>Need proof? Check out my projects! <i class="fa-solid fa-arrow-up-right-from-square "></i></p></NavLink>
        </div>
        <div className="contact-sec">
            <NavLink to="/contact"><button className="contact-b2">Get in Touch</button></NavLink>
            <p>Have a project or just want to say hi? I’d love to chat!</p> 
        </div>
    </div>
    )
}
export default About;