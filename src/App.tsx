import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Designed from "./pages/Designed";
import PersonalTraining from "./pages/PersonalTraining";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";
import SignUp from "./components/SignUp";

function HomePage() {
  return (
    <>
      <Hero />
      <Designed />
      <PersonalTraining />
      <Faq />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
