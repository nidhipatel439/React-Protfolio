import React from "react";
import Accordion from 'react-bootstrap/Accordion';

export default class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            education: []
        };
    }
    componentDidMount() {
        fetch("./api_data/work.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        experience: result
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
        const { error, isLoaded, experience } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Accordion.Item eventKey="2" className="experience-outer border-0">
                    <Accordion.Header><h2>Experience</h2></Accordion.Header>
                    <Accordion.Body className="experience-section d-flex justify-content-center pb-5">
                        <div className="w-50 px-5 py-3 shadow-lg text-start rounded experience-inner">
                            {experience.map(experience => (
                                <div className="row" key={experience.id}>
                                    <div className="col-4">
                                        <h5>{experience.start_from} - {experience.end_to}</h5>
                                    </div>
                                    <div className="col-8">
                                        <h5>{experience.job_title}</h5>
                                        <h6>{experience.company}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            );
        }
    }
}