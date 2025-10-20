import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <h1>Welcome to MyCollege</h1>
        <p>
          A premier institution dedicated to excellence in education,
          innovation, and leadership.
        </p>
        <Link to="/courses">
          <button className="explore-btn">Explore Courses</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
