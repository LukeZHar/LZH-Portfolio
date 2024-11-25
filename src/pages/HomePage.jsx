import React from 'react'
import '../styles/home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

/* eslint-disable jsx-a11y/img-redundant-alt */
export default function HomePage() {
    return (
        <div>
            <Header />
            <main>
                <section className="main-section">
                    <div className="main-img">
                        <img src={require("../assets/Resume-pic.jpg")} alt="Me" />
                    </div>
                    <div className="home-text">
                        <p className="who">
                            <div className="container">
                                <h1 className="text">Hello, I'm Luke Harris!</h1>
                            </div>
                            <p>
                                Welcome to my portfolio website, 
                            </p>
                            <p>
                                I am a Junior Full Stack Developer
                            </p>
                            <p>
                                Coding languages I have used: 
                                
                            </p>
                            <p>   
                                HTML, CSS, JavaScript, React, Node.js, Express.js, SQL, and Python.
                            </p>
                            <p>
                                I'm really looking forward to learning new coding languages and getting to transition into the coding world!!!
                            </p>
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}