import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="page about">
      <h2>About Our College</h2>
      <p>
        Established in 1995, <strong>MyCollege</strong> has been at the forefront
        of higher education, providing world-class learning opportunities and
        fostering innovation among students.
      </p>

      <div className="about-sections">
        <div className="about-card">
          <h3>🎓 Our Vision</h3>
          <p>
            To empower students with quality education and prepare them to lead
            in a dynamic global environment.
          </p>
        </div>

        <div className="about-card">
          <h3>🏫 Our Mission</h3>
          <p>
            To cultivate academic excellence through research, innovation, and
            ethical values in every learner.
          </p>
        </div>

        <div className="about-card">
          <h3>🤝 Our Values</h3>
          <p>
            Integrity, inclusivity, leadership, and lifelong learning are the
            pillars that define our institution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
