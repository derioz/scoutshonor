import React from 'react';
import { Utensils, Brain, Activity, Eye, Users, Sparkles, Bone, Heart, Quote, Trophy, Star, Check } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const ENRICHMENT_TYPES = [
  {
    id: 'nutritional',
    title: "Nutritional",
    subtitle: "Foraging & Problem Solving",
    icon: <Utensils className="w-8 h-8" />,
    styles: "bg-yellow-50 border-yellow-200 text-yellow-900",
    accent: "bg-yellow-400 text-yellow-950",
    pill: "bg-white text-yellow-700 border-yellow-200",
    description: "Stimulates natural feeding instincts though problem-solving, exploration, & sensory engagement.",
    activities: ["Barkcuterie Boards", "Ball Pit", "Chews & Treats", "Kongs & Topples", "Slow Feeders", "Snuffle Mats", "Puzzles"],
    why: "Engages dogs' natural foraging instincts and mental focus, reducing boredom-related destructive behaviors."
  },
  {
    id: 'occupational',
    title: "Occupational",
    subtitle: "Jobs & Tasks",
    icon: <Brain className="w-8 h-8" />,
    styles: "bg-emerald-50 border-emerald-200 text-emerald-900",
    accent: "bg-emerald-500 text-white",
    pill: "bg-white text-emerald-700 border-emerald-200",
    description: "Engages dogs in purposeful tasks that mimic natural working behaviors.",
    activities: ["Agility", "Ball Pit", "Bubbles", "Fetch", "Flirt Pole", "Fear Free Training", "Puzzles"],
    why: "Provides purpose and mental stimulation to reduce frustration, restlessness, and destructive behaviors."
  },
  {
    id: 'physical',
    title: "Physical",
    subtitle: "Movement & Fitness",
    icon: <Activity className="w-8 h-8" />,
    styles: "bg-orange-50 border-orange-200 text-orange-900",
    accent: "bg-orange-500 text-white",
    pill: "bg-white text-orange-700 border-orange-200",
    description: "Promotes fitness and health through varied movement, exercise, and play.",
    activities: ["Agility", "Climbing Structures", "Fetch", "Flirt Pole", "Group Play", "Nature Walks", "Splash Pads", "Wobble Board"],
    why: "Releases energy and improves fitness to prevent boredom-related behaviors like chewing, digging, & hyperactivity."
  },
  {
    id: 'sensory',
    title: "Sensory",
    subtitle: "Sights, Sounds & Smells",
    icon: <Eye className="w-8 h-8" />,
    styles: "bg-violet-50 border-violet-200 text-violet-900",
    accent: "bg-violet-500 text-white",
    pill: "bg-white text-violet-700 border-violet-200",
    description: "Stimulates dogs' senses through diverse smells, sounds, textures, and sights.",
    activities: ["Ball Pit", "Barkcuterie Board", "Fear Free Spa", "Music", "Natural Light", "Scent Space", "Storytime"],
    why: "Fulfills curiosity, reduces stress, and prevents overstimulation that leads to anxious or destructive behaviors."
  },
  {
    id: 'social',
    title: "Social",
    subtitle: "Interaction & Confidence",
    icon: <Users className="w-8 h-8" />,
    styles: "bg-rose-50 border-rose-200 text-rose-900",
    accent: "bg-rose-400 text-white",
    pill: "bg-white text-rose-700 border-rose-200",
    description: "Builds social skills and confidence through positive interactions and relationships.",
    activities: ["1-on-1 Enrichment", "Fear Free Spa", "Group Play", "Group Training", "Pack Walks", "Parties", "Storytime"],
    why: "Builds confidence and decreases anxiety-driven behaviors like barking and separation distress."
  }
];

export const Enrichment: React.FC = () => {
  return (
    <div className="bg-transparent overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-white rounded-b-[3rem] shadow-sm z-20">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-100 rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-scout-200 rounded-full blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-scout-50 border border-scout-200 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
                <Star className="w-4 h-4 text-sunny-400 fill-current" />
                <span className="text-xs font-bold uppercase tracking-widest text-scout-600">The Scout's Honor Method</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-scout-900 mb-8 animate-fade-in-up leading-[0.9] tracking-tight" style={{ animationDelay: '0.1s' }}>
                The <span className="text-sunny-500 relative inline-block">
                  5 Pillars
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-sunny-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none"/></svg>
                </span> of <br/>Enrichment
            </h1>
            
            <p className="text-xl md:text-2xl text-scout-600 leading-relaxed max-w-2xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                We don't just "watch" dogs. We engage their <strong className="text-scout-900 font-medium">body, mind, and senses</strong> to ensure they leave happier and healthier than they arrived.
            </p>
        </div>
      </section>

      {/* The 5 Pillars Cards */}
      <section className="px-6 py-24 relative z-10">
        <div className="max-w-[1200px] mx-auto space-y-12">
            
            {ENRICHMENT_TYPES.map((type, idx) => (
                <div 
                  key={type.id} 
                  className={`relative rounded-[3rem] p-8 lg:p-12 border-2 ${type.styles} transition-transform duration-500 hover:scale-[1.01] hover:shadow-xl`}
                >
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                        
                        {/* Icon & Title Area */}
                        <div className="lg:col-span-4 flex flex-col items-start">
                             <div className={`w-20 h-20 ${type.accent} rounded-3xl flex items-center justify-center shadow-lg rotate-3 mb-6`}>
                                {type.icon}
                             </div>
                             <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-2">{type.title}</h2>
                             <span className="font-hand text-2xl opacity-80">{type.subtitle}</span>
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-8 flex flex-col h-full">
                            <div className="mb-8">
                                <h3 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">What It Is</h3>
                                <p className="text-xl lg:text-2xl font-medium leading-relaxed">{type.description}</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-3 flex items-center gap-2">
                                       <Sparkles className="w-4 h-4" /> Activities
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {type.activities.map(act => (
                                            <span key={act} className={`px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm border ${type.pill}`}>
                                                {act}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white/50 rounded-2xl p-6 border border-black/5">
                                    <h3 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2 flex items-center gap-2">
                                       <Heart className="w-4 h-4" /> Why It Matters
                                    </h3>
                                    <p className="text-lg italic opacity-90 leading-snug">"{type.why}"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
            <div className="bg-[#2C241B] rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4D03F 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                 
                 <div className="relative z-10">
                     <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to enrich your pup's life?</h2>
                     <p className="text-xl text-scout-200 mb-10 max-w-2xl mx-auto">
                        Our Hybrid Camp and Solo Camp programs incorporate all five pillars to create the perfect day for your best friend.
                     </p>
                     <Link to="/#book">
                        <Button className="bg-sunny-400 text-scout-900 hover:bg-sunny-500 font-bold text-xl px-12 py-5 rounded-full shadow-lg hover:-translate-y-1">
                            Book an Assessment
                        </Button>
                     </Link>
                 </div>
            </div>
        </div>
      </section>

      {/* Founders Story Section - Refined */}
      <section className="py-24 bg-white rounded-t-[4rem] relative overflow-hidden border-t border-scout-100">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Text Content */}
                  <div>
                      <div className="inline-flex items-center gap-2 bg-scout-50 border border-scout-100 rounded-full px-4 py-1.5 mb-6">
                        <Users className="w-4 h-4 text-accent-500" />
                        <span className="text-xs font-bold uppercase tracking-widest text-scout-500">Our Story</span>
                      </div>
                      
                      <h2 className="font-serif text-5xl lg:text-6xl text-scout-900 mb-8 leading-none">
                          Transforming <br/><span className="text-forest-600">Our Industry.</span>
                      </h2>
                      
                      <div className="prose prose-lg text-scout-600 leading-relaxed font-light">
                          <p className="mb-6">
                              It started when Allison's dogs, Scout and June, were kicked out of daycare at the facility Kristen managed. Kristen explained the hard truth: there were sometimes <strong className="text-scout-900 font-medium">30 dogs in a single play yard</strong> with just one human to supervise.
                          </p>
                          <p className="mb-6">
                              Kristen had tried to encourage her previous employer to incorporate enrichment-based care (similar to how zoos operate) but was told it "wasn't worth the extra expense." Frustrated, she quit in August 2020.
                          </p>
                          <p>
                              She drove straight to Allison's house. Together, amidst the pandemic, they decided to build something better.
                          </p>
                      </div>
                  </div>

                  {/* Image Content */}
                  <div className="relative">
                      <div className="relative z-10 rotate-2 hover:rotate-0 transition-transform duration-700">
                          <img 
                            src="https://static.wixstatic.com/media/e69144_7125aff54c19454495735fe86bbc206d~mv2.jpg/v1/fill/w_728,h_546,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2486_edited.jpg"
                            alt="Allison and Kristen" 
                            className="w-full rounded-[3rem] shadow-2xl border-8 border-white object-cover aspect-[4/5] bg-scout-100"
                          />
                      </div>
                      
                      {/* Quote Card */}
                       <div className="absolute -bottom-10 -left-4 lg:-left-12 bg-white p-8 rounded-3xl shadow-xl border border-scout-100 max-w-sm z-20">
                          <Quote className="w-8 h-8 text-sunny-400 mb-4" />
                          <p className="italic text-scout-800 font-medium text-lg leading-relaxed mb-4">
                              "We saw a need for personalized pet care, but also for our employees to receive the benefits they deserve."
                          </p>
                          <div className="font-bold text-xs text-scout-400 uppercase tracking-widest">— Allison Jacobs, Co-Founder</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Sources Footer */}
      <section className="bg-scout-50 py-16 border-t border-scout-200 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h4 className="font-serif text-2xl text-scout-900 mb-4">Science Backed</h4>
            <p className="text-scout-600 mb-8 max-w-2xl mx-auto">
                Our methods are backed by research from Purdue University, Ohio State University, and The Zoo Scientist.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-scout-400 uppercase tracking-widest">
                <span>Enrich U</span>
                <span className="text-scout-300">•</span>
                <span>Fear Free Pets</span>
                <span className="text-scout-300">•</span>
                <span>Natural Encounters</span>
            </div>
        </div>
      </section>
      
    </div>
  );
};