import React from 'react';
import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component
import '../styles/projects.css'; // Adjust path if necessary
import '../styles/styles.css';   // If you have shared styles


export default function ProjectsPage() {
    return (
        <div>
            <Header />
            <main>
                <article className="project">
                    <section>
                        <h3>SimonSays</h3>
                    </section>
                    <section>
                        <video controls className="project-video">
                            <source src={require("../assets/videos/simonsays.mp4")} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <a href="https://github.com/LukeZHar/Simon-says" target="_blank" rel="noopener noreferrer">
                            <button className="code-button">View Code on GitHub</button>
                        </a>
                    </section>
                </article>
                <article className="project">
                    <section>
                        {/* <!-- Title for projects --> */}
                        <h3>Pokemon API</h3>
                       
                    </section>
                    <section>
                        <video controls className="project-video">
                            <source src={require("../assets/videos/PokemonAPI.mp4")} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <a href="https://github.com/LukeZHar/T3W6-PokemonAPI" target="_blank" rel="noopener noreferrer">
                            <button className="code-button">View Code on GitHub</button>
                        </a>
                    </section>
                </article>
                <article className="project">
                    <section >
                        <h3>Typing Speed Test</h3>
                    </section>
                    <section>
                        <video controls className="project-video">
                            <source src={require("../assets/videos/TypingSpeedTest.mp4")} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <a href="https://github.com/LukeZHar/t3w4-TypingSpeedTest" target="_blank" rel="noopener noreferrer">
                            <button className="code-button">View Code on GitHub</button>
                        </a>
                    </section>
                </article>
                <article className="project">
                    <section>
                        <h3>Flashcard CLI app</h3>
                    </section>
                    <section>
                        <video controls className="project-video">
                            <source src={require("../assets/videos/flashcardCLI.mp4")} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <a href="https://github.com/LukeZHar/T1A3-Terminal_application" target="_blank" rel="noopener noreferrer">
                            <button className="code-button">View Code on GitHub</button>
                        </a>
                    </section>
                </article>
                <article className="project">
                    <section>
                        <h3>Game management API</h3>
                    </section>
                    <section>
                        <video controls className="project-video">
                            <source src={require("../assets/videos/GameManagementAPI.mp4")} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <a href="https://github.com/LukeZHar/LukeHarris-T2A2" target="_blank" rel="noopener noreferrer">
                            <button className="code-button">View Code on GitHub</button>
                        </a>
                    </section>
                </article>
            </main>
            <Footer />
        </div>
    )
}