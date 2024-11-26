import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/about.css';
import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNode, faNodeJs, faPython, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeadset, faLaptopCode, faUserGroup, faTerminal, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'; // Add solid icons here


export default function AboutPage() {
    return (
        <div>
            <Header />
            <main>
                <section className="main-section">
                    <div>
                        <img src={require("../assets/Resume-pic.jpg")} alt="Me" />
                    </div>
                    <div className="about-text">
                        <section className='who'>
                            <h2>About Me!</h2>
                            <p>
                                My name is Luke Harris and I am located in Brisbane, QLD.
                                I am a Junior Full Stack Developer, I have done work with HTML, CSS, JavaScript, React, Node.js, Express.js, SQL, and Python.
                            </p>
                        </section>
                        <section className='interests'>
                            <h3>My Interests</h3>
                            {/* <!-- Start of the list --> */}
                            <ul>
                                {/* <!-- List item included with a icon (Thanks Fontawesome)--> */}
                                <li>
                                    Gaming <FontAwesomeIcon icon={faHeadset} />
                                </li>
                                <li>
                                    Coding <FontAwesomeIcon icon={faLaptopCode} />
                                </li>
                                <li>
                                    Hanging with friends and meeting new people <FontAwesomeIcon icon={faUserGroup} />
                                </li>
                            </ul>
                        </section>
                        <section className='skills'>
                            <h3>My Skills</h3>
                            <ul>
                                <li>HTML <FontAwesomeIcon icon={faHtml5} /></li>
                                <li>CSS <FontAwesomeIcon icon={faCss3} /></li>
                                <li>JavaScript <FontAwesomeIcon icon={faJs} /> </li>
                                <li>React <FontAwesomeIcon icon={faReact} /></li>
                                <li>Node.js <FontAwesomeIcon icon={faNode} /></li>
                                <li>Express.js <FontAwesomeIcon icon={faNodeJs} /></li>
                                <li>SQL <FontAwesomeIcon icon={faDatabase} /></li>
                                <li>Python <FontAwesomeIcon icon={faPython} /></li>
                            </ul>
                        </section>
                        <section className='tools'>
                            <h3>Tools</h3>
                            <ul>
                                <li>
                                    VSCode <FontAwesomeIcon icon={faCode} />
                                </li>
                                <li>
                                    Github Repo <FontAwesomeIcon icon={faSquareGithub} />
                                </li>
                                <li>
                                    Terminal (including WSL and powershare) <FontAwesomeIcon icon={faTerminal} />
                                </li>
                            </ul>
                        </section>
                        <section className="more">
                            <h3>Certificates</h3>
                            <ul>
                                <li>
                                    Dimploma of I.T - Coder Academy
                                </li>
                                <li>
                                    Udemy Certificate for
                                    "Learn how to become an amazing QA Professional Tester"
                                    course.
                                </li>
                                <li>
                                    Certificate IV in Commercial Cookery - TAFE
                                </li>
                                <li>
                                    Certificate III in Commercial Cookery - TAFE
                                </li>
                            </ul>
                            <h3>A bit more about me</h3>
                            <p>
                                I have been working as a Certificate IV qualified
                                Chef for 16 years but it's not something I am truely
                                passionate about, so I am undertaking this Coder
                                Academy bootcamp course for a Full-stack developer
                                to persue a career in I.T (which is something I am
                                passionate about).
                            </p>
                        </section>
                        {/* <!-- Section to access my resume --> */}
                        <section className="Resume-section">
                            <h4>You can view my Resume below: </h4>
                            {/* <!-- Link to resume pdf --> */}
                            <a href={require("../assets/Resume/Luke Resume 2025.pdf")}>
                                <button type="button" className="resume">Resume</button>
                            </a>
                        </section>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    )
}