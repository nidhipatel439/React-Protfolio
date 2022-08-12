import React from 'react';
import Image from 'react-bootstrap/Image';
import photo from './images/logo.jpeg';


export default class Profile extends React.Component {
    render() {
        return (
            <div className='py-5'>
                <Image src={photo} className="img-thumbnail rounded-circle w-50 mb-3" alt="..." />
                <h1 className="display-4 pb-3">Nidhi Patel</h1>
                <h2 className='pb-3'>Full-stack developer</h2>
                <div className="m-3 text-white d-flex gap-4 justify-content-center">
                    <a href="https://www.linkedin.com/in/nidhipatel439/" target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin text-light fs-3"></i>
                    </a>
                    <a href="https://github.com/nidhipatel439" target="_blank" rel="noreferrer">
                        <i className="bi bi-github text-light fs-3"></i>
                    </a>
                    <a href="mailto: nidhipatel439@gmail.com" target="_blank" rel="noreferrer">
                        <i className="bi bi-envelope-fill text-light fs-3"></i>
                    </a>
                </div>
            </div>
        )
    }
}