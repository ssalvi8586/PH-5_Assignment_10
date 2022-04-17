import React from 'react';
import myPic from "../../images/S.S.Alvi.jpg"

const About = () => {
    return (
        <div>
            <img style={{ width: "200px" }} src={myPic} className="rounded rounded-circle mx-auto d-block mt-3" alt="My Pic" />
            <div className="container my-5">
                <p>Hello, I am Shariar Sijan Alvi. After completing react, I am planning to master MERN stack inshallah and then to get into a job.</p>
            </div>
        </div>
    );
};

export default About;