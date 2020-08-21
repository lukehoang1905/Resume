import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import CvCard from "./components/CvCard";
import PersonalCard from "./components/PersonalCard";
import RightPanel from "./components/RightPanel";
import SkillProgress from "./components/SkillProgress";
import ExperienceCard from "./components/ExperienceCard";
// import NavBar from "./components/NavBar";
function App() {
  const openNewTab = (url) => {
    
    window.open(url, "_blank");
  };
  return (
    <>
      <Container>
        {/* <NavBar /> THIS WILL BE MADE INTO SIDEMENU */}
        <div className="text-center">M y D a s h </div>
        <Container id="dashboard">
          <Row className="d-lg-block">
            <Col lg="9" className="float-left " id="upper-left-pannel">
              <Row>
                <Col
                  className="text-center"
                  lg="4"
                  // style={{ border: "1px solid black" }}
                >
                  <PersonalCard />
                </Col>
                <Col
                  id="portfolio"
                  lg="8"
                  // style={{ border: "1px solid black" }}
                >
                  <CvCard openNewTab={openNewTab}/>
                </Col>
              </Row>
            </Col>
            <Col lg="3" className="float-right" id="right-pannel">
              <RightPanel openNewTab={openNewTab}/>
            </Col>
            <Col lg="9" className="float-left " id="lower-left-pannel">
              <Row>
                <Col
                  lg="6"
                  // style={{ border: "1px solid black" }}
                  // style={{ background: "#2e2e2e" }}
                  id="skill-card"
                >
                  <SkillProgress />
                </Col>
                <Col
                  lg="6"
                  style={{ border: "1px solid whitesmoke" }}
                  id="experience-card"
                >
                  <ExperienceCard openNewTab={openNewTab}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default App;
