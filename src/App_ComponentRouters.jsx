import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';

function NavRoute() {
    return (
        <div className="App">
          {/* Routes are declared within this component */}
          <BrowserRouter>
          <Navbar />
            {/* Declare individual routes here */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </BrowserRouter>
        </div>
    );
}
    
    export default NavRoute; 