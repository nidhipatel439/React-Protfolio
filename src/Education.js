import React from "react";
import Accordion from 'react-bootstrap/Accordion';

export default class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            education: []
        };
    }
    componentDidMount() {
        fetch('./api_data/education.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        education: result
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
        const { error, isLoaded, education } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Accordion.Item eventKey="1" className="education-outer border-0">
                    <Accordion.Header className="border-0"><h2>Education</h2></Accordion.Header>
                    <Accordion.Body className="education-section d-flex justify-content-center pb-5">
                        <div className="w-50 px-5 py-3  text-start rounded shadow-lg education-inner">
                            {education.map(education => (
                                <div className="row " key={education.id} >
                                    <div className="col-4">
                                        <h5>{education.start} - {education.end}</h5>
                                    </div>
                                    <div className="col-8">
                                        <h5>{education.title}</h5>
                                        <h6>{education.degree}</h6>
                                        <h6>{education.location}</h6>
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