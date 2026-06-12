import React from "react"; // Optional if your setup supports the new JSX transform
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Games from "./pages/Games";
import Contact from "./pages/Contact";
import MoeScrollTest from "./pages/MoeScrollTest";
import MoePageTest from "./pages/MoePageTest";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/games" element={<Games />} />
          <Route path="/moescrolltest" element={<MoeScrollTest />} />
          <Route path="/moepagetest" element={<MoePageTest />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
