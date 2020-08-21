import React from "react";
import { Carousel, Container } from "react-bootstrap";

const CvCard = ({ openNewTab }) => {
  const url =
    "https://drive.google.com/file/d/1CUndUamDghwfEeIw9j74yvAy0LT49FM9/view";

  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item>
            <a onClick={() => openNewTab("https://blog-jeesun.netlify.app")}>
              <img
                className="d-block w-100"
                src={require("../image/blog.PNG")}
                style={{ height: "40vh" }}
                alt="Second slide"
              />
              <h5>Social Blogging Platform</h5>
              <h7>
                Multi-users Blogs Update,Register-Login Auth, Filtered Dashboard
              </h7>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a onClick={() => openNewTab("https://nchill.netlify.app")}>
              <img
                className="d-block w-100"
                src={require("../image/nchil.PNG")}
                style={{ height: "40vh" }}
                alt="First slide"
              />
            </a>
            <h5>Movies Ranking</h5>
            <h7>Netflix Layout, Trailers, Ranking </h7>
          </Carousel.Item>
          <Carousel.Item>
            <a
              onClick={() =>
                openNewTab("https://slytherinjobboard.netlify.app")
              }
            >
              <img
                className="d-block w-100"
                src={require("../image/JobBoard.PNG")}
                style={{ height: "40vh" }}
                alt="Third slide"
              />
              <h5>Advance Careersearch Board</h5>
              <h7>Real-time Search engines, Protected Route, Modal detail </h7>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              onClick={() =>
                openNewTab("https://suspicious-lewin-a9e9b2.netlify.app")
              }
            >
              <img
                className="d-block w-100"
                src={require("../image/tictac.PNG")}
                style={{ height: "40vh" }}
                alt="Third slide"
              />
              <h5>Advance Tic-Tac-Toe</h5>
              <h7>
                History tracker, Facebook Auth login, Real-time APIs Highscore{" "}
              </h7>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a onClick={() => openNewTab("https://tw1tter.netlify.app")}>
              <img
                className="d-block w-100"
                src={require("../image/twitter.PNG")}
                style={{ height: "40vh" }}
                alt="Second slide"
              />
              <h5>Twitter Clone</h5>
              <h7>Create-Comment-React-delete Tweet,News feed,Login Auth </h7>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              onClick={() =>
                openNewTab("https://goofy-curran-18a44c.netlify.app")
              }
            >
              <img
                className="d-block w-100"
                src={require("../image/SpaceShooter.PNG")}
                style={{ height: "40vh" }}
                alt="Third slide"
              />
              <h5>Atari Shooting Game</h5>
              <h7>HTMLcanvas game, Game physics, Highscore </h7>
            </a>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default CvCard;
