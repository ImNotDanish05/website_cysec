import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlowEffect from './components/GlowEffect';
import TerminalHero from './components/TerminalHero';
import LandingPage from './pages/LandingPage';
import RoadmapPage from './pages/RoadmapPage';
import EbooksPage from './pages/EbooksPage';
import WebinarsPage from './pages/WebinarsPage';
import ForumPage from './pages/ForumPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import MemberPage from './pages/MemberPage';

function App() {
  return (
    <div className='min-h-screen bg-black relative'>
      <GlowEffect />
      <Navbar />
      <main className='pt-20 relative z-10'>
        <Routes>
          <Route path='/' element={<TerminalHero />} />
          <Route path='/roadmap' element={<RoadmapPage />} />
          <Route path='/ebooks' element={<EbooksPage />} />
          <Route path='/webinars' element={<WebinarsPage />} />
          <Route path='/forum' element={<ForumPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/member' element={<MemberPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

