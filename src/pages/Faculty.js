import React from "react";
import "./Faculty.css";

const Faculty = () => {
  const facultyMembers = [
    { name: "Dr.M.Laxminarayana", dept: "Computer Science", experience: "10 years" },
    { name: "Prof.N.Siva", dept: "Business Studies", experience: "8 years" },
    { name: "Dr. R.Obulpathi", dept: "Engineering", experience: "12 years" },
  ];

  return (
    <div className="page">
      <h2>Our Faculty</h2>
      <p>Meet our experienced and dedicated teaching professionals.</p>

      <div className="faculty-list">
        {facultyMembers.map((faculty, index) => (
          <div key={index} className="faculty-card">
            <h3>{faculty.name}</h3>
            <p><strong>Department:</strong> {faculty.dept}</p>
            <p><strong>Experience:</strong> {faculty.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
