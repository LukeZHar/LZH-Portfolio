import React from 'react'
import '../styles/home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

/* eslint-disable jsx-a11y/img-redundant-alt */
export default function HomePage() {
    return (
        <div className="home-page">
            <Header />
            <main>
                <section className="main-section">
                    <div className="main-img">
                        <img src={require("../assets/Resume-pic.jpg")} alt="Me" />
                    </div>
                    <div className="home-text">
                        <div className="who">
                            <div className="container">
                                <h1 className="text">Hello, I'm Luke Harris!</h1>
                            </div>
                            <p>
                                Welcome to my portfolio website, 
                            </p>
                            <p>
                            Aspiring Full-Stack Developer with dedicated training from Coder Academy Bootcamp, aiming to advance a career in the IT and gaming industry. 
                            </p>
                            <p>
                            Leveraging problem-solving skills and creativity honed during a culinary career, I am passionate about technology, regularly building and upgrading personal computers, and producing content for a gaming-focused YouTube channel. Seeking hands-on opportunities to further enhance skills in software development
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}