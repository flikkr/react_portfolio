import { Box, Button } from "@material-ui/core";
import { Container, Row, Col } from "reactstrap";
import "./MapNavigator.scss";

function MapNavigator(props) {
  return (
    <div className='map-navigator'>
      <Container>
        <Row>
          <Col xs='6'>
            <Button onClick={props.onBackPress}>Hello</Button>
          </Col>
          <Col xs='6'>
            <Button onClick={props.onForwardPress}>there</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MapNavigator;
