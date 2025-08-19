import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageComponent from './components/pages/landingPage/LandingPageComponent'
import CertificationPageComponent from './components/pages/certificationPage/CertificationPageComponent'
import AboutPageComponent from './components/pages/aboutPage/AboutPageComponent';



const App = () => {
  return (
   <Router>
     
      <Routes>
        <Route path="/" element={<LandingPageComponent/>} />
        <Route path="/certification" element={<CertificationPageComponent/>} />
             <Route path="/about" element={<AboutPageComponent/>} />

        {/* fallback */}
        <Route path="*" element={<h1 className="p-4">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App

