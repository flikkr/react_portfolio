import React from "react";
import { Row } from "reactstrap";
import { Button, Avatar } from "@material-ui/core";
import "./Intro.scss";

function Intro() {
  return (
    <div className='body-wrapper center'>
      <div style={{ textAlign: "center" }}>
        <Avatar
          alt='Remy Sharp'
          src='https://picsum.photos/200'
          textAlign='true'
        />
        <div>
          <h1>TEST TESasdadT</h1>
          <h2>TEST TEST</h2>
          <Button color='secondary'>Hello World</Button>
          <Row>
            <div style={{ width: "auto" }}>test</div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Intro;
