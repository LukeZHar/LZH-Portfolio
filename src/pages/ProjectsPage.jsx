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
                <article class="project">
                    <section>
                        {/* <!-- Title for projects --> */}
                        <h3>Game Management API</h3>
                    </section>
                    <section>
                        {/* <!-- image for the project --> */}
                        <img className="project-image"
                            src=""
                            alt="project post" />
                    </section>
                </article>
                <article className="project">
                    <section >
                        <h3>Flashcard CLI App</h3>
                    </section>
                    <section>
                        <img className="project-image"
                            src=""
                            alt="project post" />
                    </section>
                </article>
                <article className="project">
                    <section>
                        <h3>Basic Webiste Using HTML:5 and CSS</h3>
                    </section>
                    <section>
                        <img className="project-image"
                            src=""
                            alt="project post" />
                    </section>
                </article>
            </main>
            <Footer />
        </div>
    )
}