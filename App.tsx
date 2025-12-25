import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { Home } from './pages/Home';
import { ServiceDetail } from './pages/ServiceDetail';
import { Enrichment } from './pages/Enrichment';
import { StandardBoarding } from './pages/StandardBoarding';
import { DeluxeBoarding } from './pages/DeluxeBoarding';
import { Daycare } from './pages/Daycare';

// Wrapper to handle scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = React.useMemo(() => ({ pathname: window.location.hash }), []);
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
}

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 z-[100] pointer-events-none bg-grain opacity-40 mix-blend-multiply"></div>
      
      {/* 
        GLOBAL PARALLAX BACKGROUND
        - Fixed position to stay in viewport
        - Includes base color (bg-scout-50) AND pattern (bg-scout-pattern)
        - Translates based on scrollY to create depth
        - Speed reduced to 0.05 for subtle effect
      */}
      <div 
        className="fixed inset-0 z-[-1] pointer-events-none bg-scout-50 bg-scout-pattern"
        style={{ 
          backgroundPositionY: `${scrollY * 0.05}px`, 
          backgroundPositionX: 'center'
        }}
      />

      <div className="min-h-screen font-sans text-scout-900 selection:bg-accent-200 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enrichment" element={<Enrichment />} />
            <Route path="/daycare" element={<Daycare />} />
            <Route path="/boarding/standard" element={<StandardBoarding />} />
            <Route path="/boarding/deluxe" element={<DeluxeBoarding />} />
            <Route path="/:id" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </HashRouter>
  );
};

export default App;