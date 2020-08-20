import React from "react";
import { Container } from "react-bootstrap";
import "./SkillProgress.css";

const SkillProgress = () => {
  return (
    <>
      <Container className="skills-container">
        <h4>DevSkills</h4>
        <div className="d-flex skills">
          <span className="name">HTML/CSS : </span>
          <div className="percent">
            <div className="progress" style={{ width: "95%" }}></div>
          </div>
          <span className="value">95%</span>
        </div>
        <div className="d-flex skills">
          <span className="name">M.E.R.N : </span>
          <div className="percent">
            <div className="progress" style={{ width: "75%" }}></div>
          </div>
          <span className="value">75%</span>
        </div>
        <div className="d-flex skills">
          <span className="name">Javascript : </span>
          <div className="percent">
            <div className="progress" style={{ width: "80%" }}></div>
          </div>
          <span className="value">80%</span>
        </div>
        <div className="d-flex skills">
          <span className="name">C/Python : </span>
          <div className="percent">
            <div className="progress" style={{ width: "60%" }}></div>
          </div>
          <span className="value">60%</span>
        </div>
      </Container>
    </>
  );
};

export default SkillProgress;
