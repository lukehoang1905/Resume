import React from "react";
import { Col } from "react-bootstrap";

const RightPanel = () => {
  return (
    <>
      <Col lg="3" className="float-right" id="right-pannel">
        <div  id="upper-right">
          <h1>upper-right</h1>
          <h2>this to check shorter</h2>
          <h1>asdad</h1>
        </div>
        <div  id="lower-right">
          <h1>lower-right</h1>
          <h2>this to check longer</h2>
          <h2>this to check longer</h2>
          <h2>this to check longer</h2>
          <h2>this to check longer</h2>
          <h2>this to check longer</h2>
          <h2>this to check longer</h2>
          <h2>this to check longer</h2>
          <h2>final</h2>
          <div id="end-of-card"></div>
        </div>
      </Col>
    </>
  );
};

export default RightPanel;
