import React from 'react';
import "./css/Home.css";
import { useFadeIn } from "./fadeIn";
import { NavLink } from 'react-router-dom';
import Projects from './Projects';
function Home(){
    const loaded = useFadeIn();
    return(
        <main className={`${loaded ? "fade-in" : ""}`}>
            <div className="left">
            <h2> <span className="red">M</span>ark <span className="red">D</span>inol <span className="red">R</span>odrigo</h2>
            <h4><i class="fa-solid fa-quote-left quote"></i>  &nbsp;<span id="latin-ph">Per aspera ad astra. </span> <i class="fa-solid fa-quote-right quote"></i></h4>
            <p>I'm a Computer Science undergraduate with a strong focus on competitive programming and machine learning. 
            Outside of code, I'm also a painter who enjoys expressing ideas through visual art. 
            I like to balance logic and creativity in everything I do.</p>

            <div className="contact-s">
                <NavLink to="/contact"><button className='contact'>Contact Me</button></NavLink>
                <button className='contact'>Download CV</button>
            </div>
            </div>

            <div className="right">
           
                <div className="container">
               <img src='/Images/me-bg.png' className='responsive-img' alt='thats me mdr'></img>
                </div>
            </div>
        </main>
    );
}
export default Home;