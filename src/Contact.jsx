import React, { useState } from 'react';
import { useFadeIn } from './fadeIn';
import "./css/contact.css";
function Contact() {
  const loaded = useFadeIn();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSend = (e) => {
    e.preventDefault(); // prevent form reload
    const email = "mdrodrigo200611@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={`contact-main ${loaded ? "fade-in" : ""}`}>
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or just a friendly hello!</p>
      <h3> <i class="fa-solid fa-envelope"></i> Email me</h3>
      <form onSubmit={handleSend}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button type="submit">Send</button>
      </form>

      <div className="contact-info">
        <h3>Let's Connect</h3>
        <div className="connect-apps">
        <span> <a href="https://www.linkedin.com/in/mark-rodrigo/" target="_blank"><i class="fa-brands fa-linkedin"></i> </a> </span>
        <span><a href="https://www.youtube.com/@md_pedia1" target='_blank'><i class="fa-brands fa-youtube"></i></a></span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
