import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

import LandingPage from "./pages/LandingPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


export default function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/contacte" element={<ContactPage/>}/>
            <Route path="/projectes" element={<ProjectsPage/>}/>
            <Route path="*" element={<LandingPage/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}
