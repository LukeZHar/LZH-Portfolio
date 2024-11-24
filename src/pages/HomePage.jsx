import '../styles/home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

/* eslint-disable jsx-a11y/img-redundant-alt */
export default function HomePage() {
    return (
        <div>
            <Header />
            <section className="main-section">
                <div className="main-img">
                    <img src="../assets/L.H.png" alt="Me" />
                </div>
                <div className="home-text">
                    <p className="who">
                        <div className="container">
                            <h1 className="text">Hello, I'm Luke Harris!</h1>
                        </div>
                        <p>
                            Welcome to my portfolio website, I am a Full Stack Developer
                        </p>
                        <p>
                        I have done work with HTML, CSS, JavaScript, React, Node.js, Express.js, SQL, and Python.
                        </p>
                    </p>
                    
                </div>
            </section>
            <Footer />
        </div>
    )
}