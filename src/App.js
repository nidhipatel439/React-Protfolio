import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Projects from './Project';
import About from './About';
import Skill from './Skill';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Education from './Education';
import Accordion from 'react-bootstrap/Accordion';
import Experience from './Experience';
import Profile from './Profile';
import React from 'react';


export default class App extends React.Component {
  render() {
    return (
      <>
        <Container fluid className='overflow-hidden'>
          <Row className='vh-100'>
            <Col xs={12} md={3} className="bg-dark text-light text-center ">
              <Profile />
            </Col>
            <Col xs={12} md={9} className="p-0">
              <Accordion defaultActiveKey="0">
                <About />
                <Education />
                <Experience />
                <Projects />
                <Skill />
              </Accordion>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}