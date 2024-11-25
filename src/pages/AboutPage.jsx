import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/about.css';
import '../styles/styles.css';


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
                                    Gaming <i class="fa-solid fa-headset"></i>
                                </li>
                                <li>
                                    Coding <i class="fa-solid fa-laptop-code"></i>
                                </li>
                                <li>
                                    Hanging with friends and meeting new people <i
                                        class="fa-solid fa-user-group"></i>
                                </li>
                            </ul>
                        </section>
                        <section className='skills'>
                            <h3>My Skills</h3>
                            <ul>
                                <li>HTML <i class="fa-brands fa-html5"></i></li>
                                <li>CSS <i class="fa-brands fa-css3"></i></li>
                                <li>JavaScript <i class="fa-brands fa-js"></i> </li>
                                <li>React <i class="fa-brands fa-react"></i></li>
                                <li>Node.js<i class="fa-brands fa-node"></i></li>
                                <li>Express.js <i class="fa-brands fa-node-js"></i></li>
                                <li>SQL <i class="fa-solid fa-database"></i></li>
                                <li>Python <i class="fa-brands fa-python"></i></li>
                            </ul>
                        </section>
                        <section className='tools'>
                            <h3>Tools</h3>
                            <ul>
                                <li>
                                    VSCode <i class="fa-solid fa-code"></i>
                                </li>
                                <li>
                                    Github Repo <i
                                        class="fa-brands fa-square-github"></i>
                                </li>
                                <li>
                                    Terminal (including WSL and powershare) <i
                                        class="fa-solid fa-terminal"></i>
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
                            <a href="/">
                                <button type="button" className="resume">Resume</button>
                            </a>
                        </section>
                    </div>
                </section>
            </main>
            <Footer/>
        </div >
    )
}