import React from "react";
import { Image, Container } from "react-bootstrap";

const PersonalCard = () => {
  return (
    <>
      <Container className="personal-card">
        <h4>Hoang Anh Tuan</h4>
        <Image
          src={require("../image/ava.jpg")}
          roundedCircle
          style={{ width: "15vh" }}
        />
        <h5>- Luke -</h5>
        <p>Full Stack Developer</p>
        <Image
          src={require("../image/mern.jpeg")}
          fluid
          style={{ height: "60px" }}
          alt="mern"
        />
        <p>"Maximum effort"</p>
      </Container>
    </>
  );
};

export default PersonalCard;
