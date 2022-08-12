import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';


export default class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            skills: []
        };
    }
    componentDidMount() {
        fetch("./api_data/skills.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        skills: result
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
        const { error, isLoaded, skills } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Accordion.Item eventKey="4" className="skill-outer border-0">
                    <Accordion.Header><h2>Skills</h2></Accordion.Header>
                    <Accordion.Body className="overflow-auto skill-section">
                        {skills.map(skill => (
                            <div key={skill.id} className="pb-3">
                                <h5>{skill.title}</h5>
                                <ProgressBar now={skill.percent} label={`${skill.percent}%`} />
                            </div>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            );
        }
    }
}