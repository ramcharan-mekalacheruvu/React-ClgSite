import React from "react";
import "./Admissions.css";

const Admissions = () => {
  return (
    <div className="page">
      <h2>Admissions</h2>
      <p>
        Start your journey with us! Follow the steps below to apply for our upcoming academic year.
      </p>

      <ol className="admission-steps">
        <li>Fill out the online application form.</li>
        <li>Upload required documents (mark sheets, ID proof, photos).</li>
        <li>Pay the application fee online.</li>
        <li>Attend the entrance interview or exam (if applicable).</li>
        <li>Wait for confirmation and admission letter.</li>
      </ol>

      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default Admissions;
