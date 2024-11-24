import Navbar from "./Navbar";

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <a href="../pages/HomePage.jsx">
                    <img src="../assets/L.H.png" alt="Logo with my name" />
                </a>
            </div>
            <h1>LZH Portfolio</h1>
            <Navbar />
        </div>
    )
}