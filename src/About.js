import React from "react";
import Accordion from 'react-bootstrap/Accordion';


export default class About extends React.Component {
    render() {
        return (
            <Accordion.Item eventKey="0" className="about-outer border-0">
                <Accordion.Header><h2>About me</h2></Accordion.Header>
                <Accordion.Body className="about-section d-flex justify-content-center pb-5">
                    <div className="about-inner shadow-lg rounded p-5 w-75">
                        <h4>I'm a full-stack web developer. My previous experience as an HTML developer has given me a strong foundation for creating website and building complex solutions. Currently, I am perusing Web Development program from the Humber college. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</h4>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        );
    }
} 