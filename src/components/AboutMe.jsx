import React from "react";

const AboutMe = () => {
  return <div>
    <h2 className="section-title"><span className="prompt">$</span> whoami</h2>
    <p className="about-intro">
      I'm <b>Shiva</b>, a web developer based in Hyderabad who likes turning rough ideas into
      clean, working interfaces. I mostly build with <b>React</b> and <b>Node.js</b>, and I care
      a lot about the small details — spacing, load times, the way a button feels when you click it.
      Outside of client work, I'm usually shipping side projects or picking apart how other
      products are built.
    </p>
    <h2 className="section-title">quick facts</h2>
    <div className="stat-grid">
      <div className="stat-card"><div className="stat-num">2+</div><div className="stat-label">years building</div></div>
      <div className="stat-card"><div className="stat-num">15+</div><div className="stat-label">projects shipped</div></div>
      <div className="stat-card"><div className="stat-num">6</div><div className="stat-label">tech talks given</div></div>
    </div>
  </div>
    ;
};

export default AboutMe;
