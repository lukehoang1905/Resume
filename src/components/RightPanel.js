import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./RightPanel.css";
const motivation = [
  " crititcal problem-solving",
  " pro-active learner",
  " teamwork skills",
  " achievement driven",
  " innovatity adaptive",
  " creativity mind",
  " social responsibility ",
];
const effective = ["effectively", "efficently", "perfectly"];

const RightPanel = ({ openNewTab }) => {
  const [motivationNumber, setMotivationNumber] = useState(0);
  const [effectiveNumber, setEffectiveNumber] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setMotivationNumber(Math.floor(Math.random() * 5) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setEffectiveNumber(Math.floor(Math.random() * 2) + 1);
    }, 6700);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container>
        <div id="upper-right">
          <h3>About me</h3>
          <p>
            My high performance attributes are best described as
            <span className="motivation">
              {motivation[motivationNumber]}
            </span>{" "}
            At work, I am dedicated to{" "}
            <span className="effective">{effective[effectiveNumber]}</span>{" "}
            fulfill my role and responsibilities.
          </p>
        </div>
        <div id="lower-right">
          <h3>Attributes</h3>
          <div id="lower-right-content">
            <h5>crititcal problem-solving</h5>
            <h2>pro-active learner</h2>
            <h4>teamwork skills</h4>
            <h4>achievement driven</h4>
            <h1>innovatity adaptive</h1>
            <h2>creativity mind</h2>
            <h7>social responsibility</h7>
          </div>
        </div>
        <div id="end-of-card">
          <h3 className="bg-info">My Contact</h3>
          <div className="logos d-flex justify-content-between">
            <a
              onClick={() => openNewTab("https://www.facebook.com/GrillardinT")}
              class="fa fa-facebook"
            ></a>
            <a
              onClick={() =>
                openNewTab("https://www.linkedin.com/in/lukehoang195/")
              }
              class="fa fa-linkedin"
            ></a>
            <a
              onClick={() =>
                openNewTab("https://gist.github.com/lukehoang1905")
              }
              class="fa fa-github"
            ></a>
            <a
              onClick={() => openNewTab("lukehoang@gmail.com")}
              class="fa fa-google"
            ></a>
            <a class="fa fa-instagram">
              onClick=
              {() => openNewTab("https://www.instagram.com/_tuong.ot_/?hl=en")}{" "}
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RightPanel;
