import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function About() {
    return (
        <>
            <div>
                <p>
                    This web app is an implementation of tutorials from &nbsp;
                    <a href="https://contactmentor.com/best-react-projects-for-beginners-easy/">here</a>
                </p>
            </div>
            <div>
                <p><EmailIcon />fake@mail.com</p>
                <p><PhoneIcon />06.05.04.03.02</p>
            </div>
        </>
    )
}
export default About;