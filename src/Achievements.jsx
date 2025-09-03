import React, { useState } from "react";
import { achievements } from "./achievement_list.js";
import './css/Achievements.css';
import { useFadeIn } from "./fadeIn.jsx";

function AchievementCard({ data }) {
  const colors = ["easy", "medium", "hard"];
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="achievement-card">
      <div className="title">
        <span className={`difficulty-circle ${colors[data.difficulty]}`}></span>
        {data.title}
        <button 
          className={`expand-btn ${expanded ? 'rotated' : ''}`}
          onClick={() => setExpanded(!expanded)}
        >
          ▼
        </button>
      </div>

      <div className={`details ${expanded ? 'expanded' : ''}`}>
        <div className="date">{data.date}</div>
        <div className="description">{data.description}</div>
        {data.skills && (
          <div className="skills"><strong>Skills:</strong> {data.skills.join(", ")}</div>
        )}
        {data.proof_link && (
          <a href={data.proof_link} target="_blank" rel="noreferrer" className="proof-link">
            View Proof
          </a>
        )}
        {data.img &&(
          <img src={data.img} className="image"/>
        )}
      </div>
    </div>
  );
}

export default function AchievementTimeline() {
  const loaded = useFadeIn();
  return (
    <div className={`main ${loaded ? "fade-in" : ""}`}>
      <p>
        Here are some of my achievements that I’m proud of. Some are big milestones, 
        others smaller steps, but each represents learning, growth, and effort. 
        I’m always striving to improve and take on new challenges.
      </p>

      <div className="achievement-timeline">
        <div className="timeline-line"></div>
        {achievements.map((a, idx) => (
          <AchievementCard key={idx} data={a} />
        ))}
      </div>
    </div>
  );
}
