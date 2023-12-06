import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./pages/about";
import Skills from "./pages/skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path='/' exact Component={About} />
          <Route path='/skills' exact Component={Skills} />
          <Route path='/portfolio' exact Component={Portfolio} />
          <Route path='/contact' exact Component={Contact} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
