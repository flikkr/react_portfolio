import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import { Button, Avatar } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

import "./Intro.scss";

function bounceInterp(r) {
  return `translate3d(0, ${15 * Math.sin(r + (2 * Math.PI) / 1.6)}px, 0)`;
}

function Intro() {
  const { radians } = useSpring({
    from: { radians: 0 },
    to: async (next) => {
      await next({ radians: 1 * Math.PI });
    },
    loop: true,
    reset: true,
  });

  return (
    <div className='body-wrapper center'>
      <div style={{ textAlign: "center" }}>
        <Avatar alt='Remy Sharp' src='https://picsum.photos/200' />
        <div>
          <h1>Hello there!</h1>
          <div>
            <h2>My name is Kazymir, nice to e-meet you</h2>

            <animated.div style={{ transform: radians.to(bounceInterp) }}>
              <h2>👋</h2>
            </animated.div>
          </div>
          <p>Welcome to my online portfolio. Sadly it's not quite yet ready!</p>
          <p>Come back soon to see its progress 😊</p>
          <Container>
            <Row>
              <Col>
                <Button color='secondary' component={Link} to={"/story"}>
                  Skip to CV
                </Button>
              </Col>
              <Col>
                <Button
                  color='primary'
                  variant='contained'
                  component={Link}
                  to={"/story"}
                  style={{ textTransform: "none" }}
                >
                  Let's hear your story!
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Intro;
