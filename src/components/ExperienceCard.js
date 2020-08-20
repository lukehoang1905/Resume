import React from "react";
import { Container, Image, Button, Row, Col } from "react-bootstrap";
import "./ExperienceCard.css";

const ExperienceCard = () => {
  const openNewTab = () => {
    const url =
      "https://drive.google.com/file/d/1CUndUamDghwfEeIw9j74yvAy0LT49FM9/view";
    window.open(url, "_blank");
  };
  return (
    <>
      <Container className="experience-card">
        <Image
          src={require("../image/work.gif")}
          fluid
          className="experience-img display-block"
        />
        <div className="overlay">
          <div className="text-center">
            <h4>Summary</h4>
            <Row>
              <Col lg="6">
                Education
                <p>Griffith University Australia Bachelor of Commerce</p>
                <p>CoderSchool BootCamp Full-stack Developer</p>
                <p>Bui Thi Xuan Highschool</p>
              </Col>
              <Col lg="6">
                Experience
                <p>My Tran C.B.B Retail Bussiness Manager</p>
                <p>Ernst & Young Vietnam Audit Associate</p>
                <p>Interior Stone Australia Sale Representative</p>
              </Col>
            </Row>

            <Button onClick={() => openNewTab()}>To Resume</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ExperienceCard;
