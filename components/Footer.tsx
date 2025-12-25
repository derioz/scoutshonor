import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  // Filter to turn the logo into #2C241B (Scout-900 Dark Coffee)
  const coffeeFilter = 'brightness(0) saturate(100%) invert(13%) sepia(13%) saturate(1131%) hue-rotate(345deg) brightness(97%) contrast(92%)';

  return (
    <footer className="bg-scout-50 text-scout-900 pt-20 pb-10 border-t border-scout-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
           <div className="mb-10 md:mb-0">
             <div className="flex items-center space-x-3 mb-6">
               <img 
                 src="https://r2.fivemanage.com/image/Jk5CVrHZfOSR.png" 
                 alt="Scout's Honor Logo" 
                 className="h-12 w-auto object-contain" 
                 style={{ filter: coffeeFilter }}
               />
               <span className="font-serif font-bold text-3xl">Scout's Honor</span>
             </div>
             <p className="max-w-sm text-scout-600 text-lg">
               Bloomington's premier destination for dog care. Where safety, fun, and love come standard.
             </p>
           </div>
           
           <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
              <div>
                 <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-scout-400">Visit Us</h4>
                 <address className="not-italic text-lg space-y-2">
                    <p>611 W 11th St</p>
                    <p>Bloomington, IN 47404</p>
                    <a href="tel:812-287-8260" className="block mt-4 hover:text-accent-500 transition-colors">812-287-8260</a>
                 </address>
              </div>
              <div>
                 <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-scout-400">Follow</h4>
                 <div className="flex flex-col space-y-2 text-lg">
                    <a href="#" className="hover:text-accent-500 transition-colors flex items-center">Instagram <ArrowUpRight className="w-4 h-4 ml-1" /></a>
                    <a href="#" className="hover:text-accent-500 transition-colors flex items-center">Facebook <ArrowUpRight className="w-4 h-4 ml-1" /></a>
                 </div>
              </div>
           </div>
        </div>

        {/* Big Links */}
        <div className="border-t border-scout-200 py-12">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Boarding', 'Daycare', 'Grooming', 'Training'].map(item => (
                 <a key={item} href={`#${item.toLowerCase()}`} className="text-2xl md:text-4xl font-serif font-bold text-scout-300 hover:text-scout-900 transition-colors">
                    {item}
                 </a>
              ))}
           </div>
        </div>

        <div className="border-t border-scout-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-scout-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Scout's Honor. Made with love in Bloomington.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-scout-900">Privacy Policy</a>
            <a href="#" className="hover:text-scout-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};