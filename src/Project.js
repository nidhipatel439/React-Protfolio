import React from "react";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            projects: []
        };
    }
    componentDidMount() {
        fetch('./api_data/projects.json',)
            .then(res => {
                return res.json()
            })
            .then(result => {
                this.setState({
                    isLoaded: true,
                    projects: result,
                });
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, projects } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Accordion.Item eventKey="3" className="project-outer border-0">
                    <Accordion.Header><h2>Projects</h2></Accordion.Header>
                    <Accordion.Body className="overflow-auto project-section">
                        <Container>
                            <Row>
                                {projects.map(project => (
                                    <Col key={project.id} className="pb-5">
                                        <Card className="text-dark" >
                                            <Card.Img variant="top" src={project.image} />
                                            <Card.Body>
                                                <Card.Title>{project.title}</Card.Title>
                                                <Card.Text>
                                                    {project.content}
                                                </Card.Text>
                                                <a href={project.url} target="_blank" rel="noreferrer">Project link</a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            );
        }
    }
}