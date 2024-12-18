import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css'; // Include specific styles if necessary

export default function Footer() {
    return (
        <footer className="footer">
            <div className="socials">
                <a href="https://www.linkedin.com/in/luke-z-harris/"
                    target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/LukeZHar" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100008874826531"
                    target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </div>
            {/* Phone and address information */}
            <div className="info">
                <p>Contact: <a href="mailto:luke.z.harris@hotmail.com" className="email">luke.z.harris@hotmail.com</a></p>
                <p>Address: QLD, Australia</p>
            </div>
            {/* Link back to top */}
            <a className="back" href="#heading">Back to Top</a>
            <p><b>Luke Harris 2024 &copy;</b></p>
        </footer>
    );
}