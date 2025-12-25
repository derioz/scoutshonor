import React, { useState, useEffect, useRef } from 'react';
import { Star, ArrowUpRight, ArrowRight, Clock, MapPin, Bone, Trophy, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { SERVICES, TESTIMONIALS } from '../constants';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Calculation for subtle movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-transparent overflow-x-hidden">
      
      {/* 
        SECTION 1: THE SLICK HERO
      */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden"
      >
         {/* Readability Gradient: Washes out the global background pattern behind the text area */}
         <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-gradient-to-r from-scout-50 via-scout-50/95 to-transparent z-0 pointer-events-none" />

         {/* Background Decor - Slick Curves */}
         <div className="absolute top-0 right-0 w-[60%] h-full bg-[#E6E2D8]/30 rounded-l-[200px] -z-10 hidden lg:block transform translate-x-32" />
         <div className="absolute top-40 left-20 w-32 h-32 bg-sunny-400/20 rounded-full blur-3xl -z-10" />

         <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Content & Info (Span 7) */}
            <div className="lg:col-span-7 space-y-10">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-scout-200 rounded-full pl-2 pr-4 py-1.5 shadow-sm animate-fade-in-up">
                    <div className="bg-sunny-400 text-scout-900 p-1 rounded-full">
                        <Trophy className="w-3 h-3" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-scout-600">Best of Bloomington</span>
                </div>

                {/* Heading */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-scout-900 leading-[0.95] tracking-tight mb-6 drop-shadow-sm">
                        Scout's <br/>
                        <span className="relative z-10 italic text-forest-600">
                            Honor.
                            <svg className="absolute -bottom-2 left-0 w-full h-4 text-sunny-400 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="12" fill="none" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-xl text-scout-600 max-w-xl leading-relaxed font-light bg-scout-50/50 backdrop-blur-[2px] rounded-lg p-2 -ml-2">
                        Located in the newly-renovated <strong>Historic Bender Lumber building</strong> in Downtown Bloomington. We offer luxury boarding, structured daycare, and spa grooming close to IU and the hospital.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <Link to="/#book">
                        <Button size="lg" className="w-full sm:w-auto bg-scout-900 text-white hover:bg-forest-600 rounded-full h-14 px-8 shadow-xl shadow-scout-900/10 text-lg transition-transform hover:-translate-y-1">
                            Book Your Stay
                        </Button>
                    </Link>
                    <a href="tel:812-287-8260">
                        <Button variant="outline" className="w-full sm:w-auto border-scout-300 text-scout-700 hover:bg-white h-14 px-8 rounded-full text-lg group bg-white/50 backdrop-blur-sm">
                            812-287-8260
                        </Button>
                    </a>
                </div>

                {/* Info Bar - Detailed */}
                <div className="pt-8 border-t border-scout-200/60 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    
                    {/* Hours */}
                    <div className="flex items-start gap-3 group cursor-default">
                        <div className="bg-sunny-100 p-2.5 rounded-xl text-yellow-700 group-hover:bg-sunny-400 group-hover:text-scout-900 transition-colors mt-1 shadow-sm">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-scout-900 mb-1">Lobby Hours (Mon-Sun)</h4>
                            <div className="text-xs text-scout-600 font-medium space-y-0.5">
                                <p>7:00 am – 10:00 am</p>
                                <p>4:00 pm – 07:00 pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3 group cursor-default">
                        <div className="bg-accent-100 p-2.5 rounded-xl text-accent-600 group-hover:bg-accent-500 group-hover:text-white transition-colors mt-1 shadow-sm">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-scout-900 mb-1">Downtown Bloomington</h4>
                            <p className="text-xs text-scout-600 font-medium leading-snug">
                                611 W 11th St<br/>
                                <span className="opacity-80 italic">Historic Bender Lumber</span>
                            </p>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="hidden lg:flex items-start gap-3 group cursor-default">
                        <div className="bg-forest-100 p-2.5 rounded-xl text-forest-600 group-hover:bg-forest-600 group-hover:text-white transition-colors mt-1 shadow-sm">
                            <Star className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-scout-900 mb-1">Award Winning</h4>
                            <div className="flex text-sunny-400 gap-0.5 mb-0.5">
                                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                            </div>
                            <p className="text-xs text-scout-600 font-medium">Top Rated in Bloomington</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Visuals & Map (Span 5) */}
            <div className="lg:col-span-5 relative h-[600px] hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                
                {/* Main Image Container */}
                <div 
                    className="absolute inset-0 right-12 bottom-20 bg-scout-100 rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white z-10"
                    style={{ transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)` }} 
                >
                     <img 
                        src="https://r2.fivemanage.com/image/3GIZnPcPA4v5.png" 
                        alt="Scout's Honor Facility" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s]"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-scout-900/50 to-transparent opacity-40"></div>
                </div>

                {/* Floating Map Card */}
                <div 
                    className="absolute -bottom-2 -right-2 z-20 bg-white p-2 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-float-delayed max-w-[300px] border border-scout-100"
                    style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}
                >
                    <div className="relative h-40 w-64 rounded-2xl overflow-hidden mb-3 bg-scout-100 border border-scout-50 group cursor-pointer">
                        {/* Static Map Image / Iframe Placeholder */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.706173432934!2d-86.5408990846399!3d39.17646797952866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886c66c00e60f0f9%3A0x706788806509040!2s611%20W%2011th%20St%2C%20Bloomington%2C%20IN%2047404!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale group-hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur p-1.5 rounded-lg shadow-sm">
                            <ArrowUpRight className="w-4 h-4 text-accent-500" />
                        </div>
                    </div>
                    <div className="px-3 pb-2">
                        <div className="flex items-start justify-between">
                            <div>
                                <h4 className="font-bold text-scout-900 text-sm">Find Us</h4>
                                <p className="text-[10px] text-scout-500 font-medium uppercase tracking-wider mt-0.5">Downtown Bloomington</p>
                            </div>
                            <div className="bg-scout-50 px-2 py-1 rounded-md">
                                <span className="text-xs font-bold text-scout-900">4.1 mi</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Decorative Card (Top Left) */}
                <div 
                    className="absolute top-10 left-[-40px] z-20 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-white/50 animate-float hidden xl:block"
                    style={{ transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)` }}
                >
                    <div className="flex items-center gap-3">
                        <div className="bg-sunny-400 p-2 rounded-xl text-scout-900 shadow-sm">
                            <Bone className="w-5 h-5 fill-current" />
                        </div>
                        <div>
                            <p className="font-serif font-bold text-scout-900 leading-tight">First Day Free!</p>
                            <p className="text-[10px] text-scout-500 font-bold uppercase tracking-widest">New Clients</p>
                        </div>
                    </div>
                </div>

            </div>
         </div>
      </section>

      {/* 
        SECTION 2: SERVICES - "CHOOSE YOUR ADVENTURE"
      */}
      <section className="py-24 bg-white relative z-20 rounded-t-[3rem] -mt-10 shadow-[0_-20px_40px_rgba(0,0,0,0.03)]">
         <div className="max-w-7xl mx-auto px-6">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                 <div>
                    <span className="font-hand text-3xl text-accent-500 block mb-2 -rotate-1">So many activities!</span>
                    <h2 className="font-serif text-5xl md:text-6xl text-scout-900">Choose Your Adventure</h2>
                 </div>
                 <p className="max-w-xs text-scout-500 font-medium">
                     From overnight luxury stays to enrichment-filled playdays, we have everything your dog needs.
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.slice(0, 4).map((service, idx) => (
                    <div key={service.id} className="group">
                         <Link to={`/${service.id}`} className="block h-full">
                            <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4] mb-4">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-3 shadow-lg text-scout-900">
                                    {service.icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl text-scout-900 group-hover:text-forest-600 transition-colors flex items-center gap-2">
                                    {service.title}
                                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </h3>
                                <p className="text-sm font-bold text-accent-500 mt-1 uppercase tracking-wider">{service.price}</p>
                            </div>
                         </Link>
                    </div>
                ))}
             </div>
             
             <div className="text-center mt-16">
                <Link to="/enrichment">
                    <Button variant="outline" className="border-scout-200 text-scout-600 hover:border-scout-900 hover:text-scout-900 rounded-full px-8">
                        View All Services
                    </Button>
                </Link>
             </div>
         </div>
      </section>

      {/* 
        SECTION 3: "THE DAILY WAG" (Testimonials & Fun Facts)
      */}
      <section className="py-24 bg-scout-50/50 relative overflow-hidden backdrop-blur-sm">
         {/* Doodles in background */}
         <div className="absolute top-10 left-10 opacity-5 rotate-12"><Bone className="w-32 h-32" /></div>
         
         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                
                {/* Left: Testimonial Stack */}
                <div className="space-y-8">
                    <div className="text-left">
                        <h2 className="font-serif text-4xl text-scout-900 mb-2">The Daily Wag</h2>
                        <p className="font-hand text-2xl text-scout-500">Gossip from the dog park...</p>
                    </div>

                    {TESTIMONIALS.slice(0, 2).map((t, i) => (
                        <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-scout-100 hover:shadow-md transition-shadow relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-scout-50 rounded-bl-[100px] -mr-10 -mt-10"></div>
                            
                            <div className="flex gap-1 text-sunny-400 mb-4 relative z-10">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="font-serif text-lg text-scout-800 mb-6 leading-relaxed relative z-10">"{t.text}"</p>
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="w-10 h-10 bg-scout-200 rounded-full flex items-center justify-center text-scout-700 font-bold text-sm">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-scout-900">{t.name}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-scout-400">Verified Client</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right: Fun Facts Notepad - Refined */}
                <div className="relative mt-8 lg:mt-0">
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-scout-200 relative transform rotate-1">
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-forest-50 rounded-full flex items-center justify-center text-forest-600 -mt-20 border-4 border-white shadow-sm">
                            <Sparkles className="w-8 h-8" />
                        </div>

                        <h3 className="font-serif text-3xl text-scout-900 mb-8 text-center mt-4">Facility Stats</h3>
                        
                        <ul className="space-y-5">
                            <li className="flex justify-between items-center border-b border-scout-50 pb-4">
                                <span className="text-scout-600 font-medium">Facility Size</span>
                                <span className="font-bold text-scout-900 bg-scout-100 px-3 py-1 rounded-full text-sm">15,000 sq ft</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-scout-50 pb-4">
                                <span className="text-scout-600 font-medium">Outdoor Play</span>
                                <span className="font-bold text-scout-900 bg-scout-100 px-3 py-1 rounded-full text-sm">Synthetic Turf</span>
                            </li>
                             <li className="flex justify-between items-center border-b border-scout-50 pb-4">
                                <span className="text-scout-600 font-medium">Climate Control</span>
                                <span className="font-bold text-scout-900 bg-scout-100 px-3 py-1 rounded-full text-sm">Medical Grade</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-scout-50 pb-4">
                                <span className="text-scout-600 font-medium">Happy Pups</span>
                                <span className="font-bold text-scout-900 bg-scout-100 px-3 py-1 rounded-full text-sm">Infinite</span>
                            </li>
                        </ul>

                        <div className="mt-8 text-center">
                            <Link to="/about">
                                <span className="inline-flex items-center text-accent-500 font-bold text-sm uppercase tracking-widest hover:text-accent-600 transition-colors cursor-pointer">
                                    Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* 
        SECTION 4: CTA - "JOIN THE TROOP"
      */}
      <section className="py-32 bg-[#2C241B] text-center text-scout-50 px-6 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4D03F 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
         
         <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-serif text-5xl md:text-7xl mb-6 text-white">Join the troop!</h2>
            <p className="text-xl text-scout-200 mb-10 max-w-xl mx-auto font-light">
                New to Bloomington? Get your first day of daycare <span className="text-sunny-400 font-bold">free</span> when you book a temperament test.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/#book">
                   <Button className="w-full sm:w-auto bg-sunny-400 text-scout-900 hover:bg-sunny-500 border-none text-xl px-12 py-5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 font-bold">
                      Get Started
                   </Button>
               </Link>
               <a href="tel:812-287-8260">
                   <Button variant="outline" className="w-full sm:w-auto border-scout-600 text-scout-200 hover:bg-white/10 hover:border-white text-xl px-12 py-5 rounded-full">
                      Call 812-287-8260
                   </Button>
               </a>
            </div>
         </div>
      </section>

    </div>
  );
};