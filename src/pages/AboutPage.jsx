import Header from '../components/Header';
import '../styles/about.css';


export default function AboutPage() {
    return (
        <>
        <Header />
        <div>
            <section className="main-section">
                <div className="main-img">
                    <img src="../assets/Resume-pic.jpg" alt="Me" />
                </div>
            </section>
        </div>
        </>
    )
}