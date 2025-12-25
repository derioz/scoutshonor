import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Dark Coffee Filter for Logo (#2C241B)
  const coffeeFilter = 'brightness(0) saturate(100%) invert(13%) sepia(13%) saturate(1131%) hue-rotate(345deg) brightness(97%) contrast(92%)';

  return (
    <>
      {/* Top Utility Bar - Hides on scroll */}
      <div className={`fixed top-0 left-0 right-0 z-[51] bg-scout-900 text-scout-50 text-xs font-medium tracking-widest uppercase transition-transform duration-300 origin-top flex justify-center items-center h-8 ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="flex items-center space-x-6">
          <span className="flex items-center"><MapPin className="w-3 h-3 mr-1 text-sunny-400" /> Downtown Bloomington</span>
          <span className="hidden sm:flex items-center"><Phone className="w-3 h-3 mr-1 text-sunny-400" /> 812-287-8260</span>
        </div>
      </div>

      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-sm border-scout-200 py-3' 
            : 'top-8 bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://r2.fivemanage.com/image/Jk5CVrHZfOSR.png" 
              alt="Scout's Honor" 
              className={`object-contain transition-all duration-300 ${scrolled ? 'h-8' : 'h-12'}`}
              style={{ filter: coffeeFilter }}
            />
            <div className="flex flex-col">
              <span className={`font-serif font-bold leading-none text-scout-900 transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
                Scout's Honor
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <button className="flex items-center px-4 py-2 rounded-lg font-bold text-scout-600 hover:text-scout-900 transition-colors duration-200 group">
                    <span className="relative z-10">{link.name}</span>
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                    {/* Highlighter Effect */}
                    <span className="absolute inset-0 bg-sunny-400/30 transform origin-left transition-transform duration-300 ease-out rounded-lg -z-0 scale-x-0 group-hover:scale-x-100" />
                  </button>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative px-4 py-2 rounded-lg font-bold transition-colors duration-200 group overflow-hidden ${
                        isActive ? 'text-scout-900' : 'text-scout-600 hover:text-scout-900'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="relative z-10">{link.name}</span>
                        {/* Highlighter Effect */}
                        <span className={`absolute inset-0 bg-sunny-400/30 transform origin-left transition-transform duration-300 ease-out rounded-lg -z-0 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                      </>
                    )}
                  </NavLink>
                )}

                {/* Dropdown Menu */}
                {link.submenu && (
                  <div className="absolute top-full left-0 pt-2 w-48 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-scout-100 overflow-hidden py-1">
                      {link.submenu.map((sublink) => (
                        <NavLink
                          key={sublink.path}
                          to={sublink.path}
                          className="block px-4 py-2 text-sm font-medium text-scout-600 hover:bg-sunny-100 hover:text-scout-900 transition-colors"
                        >
                          {sublink.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action */}
          <div className="flex items-center gap-4">
            <Link to="/#book" className="hidden sm:block">
              <Button 
                size={scrolled ? 'sm' : 'md'} 
                className={`transition-all duration-300 font-bold ${scrolled ? 'bg-scout-900 text-white' : 'bg-scout-900 text-white shadow-lg shadow-scout-900/20'}`}
              >
                Book Now
              </Button>
            </Link>

            <button 
              onClick={() => setIsOpen(true)}
              className="md:hidden text-scout-900 p-2 hover:bg-scout-100 rounded-full transition-colors"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Side Slide) */}
      <div className={`fixed inset-0 z-[60] pointer-events-none`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-scout-900/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Drawer */}
        <div className={`absolute top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl transition-transform duration-300 cubic-bezier(0.16, 1, 0.3, 1) pointer-events-auto flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 flex justify-between items-center border-b border-scout-100">
                <span className="font-serif font-bold text-xl text-scout-900">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-scout-50 rounded-full text-scout-500 hover:text-scout-900 transition-colors">
                    <X className="w-6 h-6" />
                </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 py-8 space-y-2">
                 {NAV_LINKS.map((link) => (
                    <div key={link.name}>
                      {link.submenu ? (
                        <>
                          <div className="text-xl font-serif font-bold text-scout-400 py-2 px-4 uppercase tracking-widest text-[10px] mt-4 mb-2">
                            {link.name}
                          </div>
                          {link.submenu.map(sublink => (
                            <NavLink
                              key={sublink.path}
                              to={sublink.path}
                              onClick={() => setIsOpen(false)}
                              className={({ isActive }) =>
                                `block text-2xl font-serif font-bold py-2 px-4 rounded-xl transition-colors pl-6 ${
                                    isActive ? 'bg-sunny-100 text-scout-900' : 'text-scout-600 hover:text-scout-900 hover:bg-scout-50'
                                }`
                              }
                            >
                              {sublink.name}
                            </NavLink>
                          ))}
                        </>
                      ) : (
                        <NavLink
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                            `block text-3xl font-serif font-bold py-3 px-4 rounded-xl transition-colors ${
                                isActive ? 'bg-sunny-100 text-scout-900' : 'text-scout-400 hover:text-scout-900 hover:bg-scout-50'
                            }`
                            }
                        >
                            {link.name}
                        </NavLink>
                      )}
                    </div>
                 ))}
            </div>

            <div className="p-6 border-t border-scout-100 bg-scout-50">
                <Link to="/#book" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-scout-900 text-white py-4 rounded-xl text-lg shadow-lg">Book Appointment</Button>
                </Link>
                <div className="mt-6 text-center space-y-1">
                    <p className="text-scout-500 text-sm font-bold uppercase tracking-widest">Contact Us</p>
                    <a href="tel:812-287-8260" className="block text-xl font-serif font-bold text-scout-900">812-287-8260</a>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};