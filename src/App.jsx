import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import PortfolioGallery from './components/PortfolioGallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogArticle from './components/BlogArticle';

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">

      {/* Background */}
      <div className="fixed inset-0 bg-[#050505] -z-50"></div>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] -z-40"></div>

      {/* Ambient Glows */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-aqua-500/10 rounded-full blur-[120px] -z-30 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-30 animate-pulse"></div>

      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <main>
              <div id="home"><HeroSection /></div>
              <div id="about"><AboutMe /></div>
              <div id="skills"><Skills /></div>
              <div id="projects"><PortfolioGallery /></div>
              <div id="blog"><Blog /></div>
              <div id="contact"><Contact /></div>
            </main>
          }
        />

        {/* BLOG ARTICLE PAGE */}
        <Route path="/blog/:slug" element={<BlogArticle />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
