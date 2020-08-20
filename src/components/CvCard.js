import React from "react";
import { Carousel, Container } from "react-bootstrap";

const CvCard = () => {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item href="https://sites.google.com/coderschool.vn/mock-interview/home">
            <img
              className="d-block w-100"
              src={require("../image/nchil.PNG")}
              style={{ height: "40vh" }}
              alt="First slide"
            />
            Description
            <p>this is my movice app</p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../image/twitter.PNG")}
              style={{ height: "40vh" }}
              alt="Second slide"
            />
            Description
            <p>this is my Twitter Clone</p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../image/SpaceShooter.PNG")}
              style={{ height: "40vh" }}
              alt="Third slide"
            />
            Description
            <p>this is my HTML game : SpaceShooting</p>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default CvCard;
