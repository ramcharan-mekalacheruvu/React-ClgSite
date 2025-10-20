import React from "react";
import "./Courses.css";

const Courses = () => {
  const courses = [
    {
      name: "B.Tech (Bachelor of Technology)",
      description:
        "A four-year undergraduate program focused on engineering and technology fundamentals.",
      branches: [
        "Computer Science and Engineering",
        "Electronics and Communication Engineering",
        "Civil Engineering",
        "Mechanical Engineering",
        "Electrical Engineering",
      ],
    },
    {
      name: "Pharmacy",
      description:
        "Comprehensive programs preparing students for careers in healthcare and pharmaceuticals.",
      branches: ["B.Pharmacy", "M.Pharmacy", "Pharm.D"],
    },
    {
      name: "B.Ed (Bachelor of Education)",
      description:
        "A two-year program focused on training and developing future educators.",
      branches: ["General Education", "Special Education"],
    },
    {
      name: "MCA (Master of Computer Applications)",
      description:
        "A three-year postgraduate program in advanced computer science and software development.",
      branches: ["Software Engineering", "Data Science", "Cyber Security"],
    },
    {
      name: "MBA (Master of Business Administration)",
      description:
        "A two-year program designed to develop leadership and management skills.",
      branches: [
        "Finance Management",
        "Marketing Management",
        "Human Resource Management",
        "Operations Management",
        "International Business",
      ],
    },
  ];

  return (
    <div className="page">
      <h2>Our Courses</h2>
      <p>
        Explore our diverse range of undergraduate and postgraduate programs
        designed to empower your career.
      </p>

      <div className="course-list">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.name}</h3>
            <p className="course-desc">{course.description}</p>
            <h4>Specializations:</h4>
            <ul>
              {course.branches.map((branch, i) => (
                <li key={i}>{branch}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
