import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Sun, Users, Brain, ShieldCheck, Clock, 
    Calendar, CheckCircle, AlertCircle, Heart, 
    Zap, Sparkles, Star, TrendingUp, DollarSign, HeartHandshake, Hammer 
} from 'lucide-react';
import { Button } from '../components/Button';

const DAYCARE_FEATURES = [
    {
        title: "Small Playgroups",
        icon: <Users className="w-8 h-8 text-sunny-500" />,
        description: "We separate dogs by size, temperament, and play style. Groups are kept small to prevent overstimulation and ensure safety."
    },
    {
        title: "Mental Enrichment",
        icon: <Brain className="w-8 h-8 text-sunny-500" />,
        description: "It's not just physical exercise. We incorporate puzzles, scent work, and basic command reinforcement to tire out their brains too."
    },
    {
        title: "Rest & Regulation",
        icon: <Heart className="w-8 h-8 text-sunny-500" />,
        description: "Mandatory nap times are enforced. An overtired dog is a cranky dog. We ensure they get the rest they need to regulate their emotions."
    }
];

const SCHEDULE = [
    { time: "7:00 AM - 9:00 AM", activity: "Arrivals & Potty Breaks", icon: <Clock className="w-4 h-4" /> },
    { time: "9:00 AM - 11:00 AM", activity: "Structured Morning Play", icon: <Zap className="w-4 h-4" /> },
    { time: "11:00 AM - 1:00 PM", activity: "Nap Time & Lunch", icon: <MoonIcon className="w-4 h-4" /> },
    { time: "1:00 PM - 3:00 PM", activity: "Enrichment Activities", icon: <Brain className="w-4 h-4" /> },
    { time: "3:00 PM - 5:00 PM", activity: "Afternoon Play & Wind Down", icon: <Users className="w-4 h-4" /> },
    { time: "5:00 PM - 7:00 PM", activity: "Pick-up Time", icon: <CheckCircle className="w-4 h-4" /> },
];

const PRICING = [
    {
        name: "Day Camp 2.0",
        price: "$45",
        nextPrice: "$45",
        desc: "Our signature enrichment program.",
        features: ["Structured Group Play", "Rest Cycles", "Basic Enrichment"],
        highlight: false
    },
    {
        name: "Hybrid Camp",
        price: "$65",
        nextPrice: "$75",
        desc: "The best of both worlds.",
        features: ["Group Play Sessions", "1-on-1 Enrichment", "Puzzle Time"],
        highlight: true
    },
    {
        name: "Solo Camp",
        price: "$80",
        nextPrice: "$90",
        desc: "For the people-pup.",
        features: ["All Human Interaction", "Private Walks", "Solo Enrichment Games"],
        highlight: false
    },
    {
        name: "Play & Train",
        price: "$90",
        nextPrice: "$100",
        desc: "Add education to the fun.",
        features: ["Daycare Activities", "Professional Training", "Take-Home Report"],
        highlight: false
    }
];

// Helper component for the moon icon used in schedule
function MoonIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
    );
}

export const Daycare: React.FC = () => {
    return (
        <div className="bg-transparent overflow-x-hidden pt-20">
            
            {/* Hero Section */}
            <section className="px-6 py-20 lg:py-24 relative bg-sunny-50">
                 <div className="absolute top-0 right-0 w-1/2 h-full bg-sunny-100/50 rounded-l-[100px] -z-10 hidden lg:block" />
                 
                 <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 bg-white border border-sunny-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                            <Sun className="w-4 h-4 text-sunny-500 fill-current" />
                            <span className="text-xs font-bold uppercase tracking-widest text-sunny-700">Daytime Adventures</span>
                        </div>
                        
                        <h1 className="font-serif text-5xl md:text-7xl text-scout-900 mb-6 leading-[0.95]">
                            Enrichment-Based <br/><span className="text-sunny-500">Daycare.</span>
                        </h1>
                        
                        <p className="text-xl text-scout-600 leading-relaxed mb-8 max-w-lg">
                            We don't just put dogs in a room and watch them. We curate varied, stimulating experiences that balance physical play with mental engagement.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/#book">
                                <Button size="lg" className="w-full sm:w-auto shadow-xl bg-sunny-500 text-white hover:bg-sunny-600 border-none">
                                    Book Assessment
                                </Button>
                            </Link>
                            <a href="#pricing">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm">
                                    View Pricing
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative">
                        <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-sunny-200">
                             <img 
                                src="https://static.wixstatic.com/media/e69144_d199178f915041d2b2f1ba647e9d7ed8~mv2.webp" 
                                alt="Dogs playing on equipment" 
                                className="w-full h-full object-cover"
                             />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute top-10 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-sunny-100 flex items-center gap-3 animate-float hidden md:flex">
                             <div className="bg-sunny-100 p-2 rounded-full text-sunny-600">
                                 <Sparkles className="w-6 h-6" />
                             </div>
                             <div>
                                 <p className="font-bold text-scout-900 text-sm">Mental & Physical</p>
                                 <p className="text-[10px] text-scout-500 uppercase tracking-wider font-bold">Balanced Care</p>
                             </div>
                        </div>
                    </div>
                 </div>
            </section>

            {/* Philosophy Section */}
            <section className="px-6 py-24 bg-white relative z-10 rounded-t-[3rem] -mt-10 shadow-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl text-scout-900 mb-4">The Scout's Honor Standard</h2>
                        <p className="text-xl text-scout-500 max-w-2xl mx-auto">
                            Why our daycare is different from the rest.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {DAYCARE_FEATURES.map((feature, idx) => (
                            <div key={idx} className="bg-sunny-50/50 p-8 rounded-[2.5rem] border border-sunny-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 rotate-3">
                                    {feature.icon}
                                </div>
                                <h3 className="font-serif text-2xl text-scout-900 mb-3">{feature.title}</h3>
                                <p className="text-scout-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* A Day in the Life (Timeline) */}
            <section className="px-6 py-24 bg-scout-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(#EA580C 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl md:text-5xl mb-4">A Day in the Life</h2>
                        <p className="text-xl text-scout-300">Routine provides comfort. Here's what to expect.</p>
                    </div>

                    <div className="relative">
                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-scout-700 md:-ml-0.5"></div>

                        <div className="space-y-12">
                            {SCHEDULE.map((item, idx) => (
                                <div key={idx} className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    
                                    {/* Content Side */}
                                    <div className="flex-1 pl-12 md:pl-0 md:text-center w-full">
                                         <div className={`bg-scout-800 p-6 rounded-2xl border border-scout-700 hover:border-sunny-500 transition-colors inline-block text-left w-full md:w-auto ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                             <span className="text-sunny-500 font-bold text-sm tracking-widest uppercase mb-1 block">{item.time}</span>
                                             <h3 className="font-serif text-2xl">{item.activity}</h3>
                                         </div>
                                    </div>

                                    {/* Center Icon */}
                                    <div className="absolute left-0 md:left-1/2 w-8 h-8 -ml-4 bg-sunny-500 rounded-full flex items-center justify-center shadow-lg shadow-sunny-500/20 z-10">
                                        {item.icon}
                                    </div>

                                    {/* Empty Side for Balance */}
                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="px-6 py-24 bg-white relative z-20 rounded-t-[3rem] -mt-10">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="font-hand text-3xl text-sunny-500 block mb-2 -rotate-2">Simple & Transparent</span>
                        <h2 className="font-serif text-5xl text-scout-900">Daycare Packages</h2>
                        <p className="mt-4 text-scout-500 font-bold text-sm uppercase tracking-widest">Pricing starting at</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                        {PRICING.map((plan, idx) => (
                            <div key={idx} className={`relative flex flex-col rounded-[2.5rem] p-8 border-2 transition-all duration-300 ${plan.highlight ? 'bg-scout-900 text-white border-scout-900 shadow-2xl scale-105 z-10' : 'bg-white text-scout-900 border-scout-100 hover:border-sunny-300 hover:shadow-xl'}`}>
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sunny-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className={`font-serif text-2xl mb-2 ${plan.highlight ? 'text-white' : 'text-scout-900'}`}>{plan.name}</h3>
                                
                                {/* Pricing Row */}
                                <div className="mb-4">
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-4xl font-bold ${plan.highlight ? 'text-sunny-400' : 'text-scout-900'}`}>{plan.price}</span>
                                        <span className={`text-xs font-bold ${plan.highlight ? 'text-scout-400' : 'text-scout-400'}`}>/ day</span>
                                    </div>
                                    
                                    {/* 2026 Price Box */}
                                    <div className={`mt-2 p-2 rounded-lg flex items-center justify-between ${plan.highlight ? 'bg-scout-800 border border-scout-700' : 'bg-accent-50 border border-accent-100'}`}>
                                        <span className={`text-[10px] font-bold uppercase tracking-widest ${plan.highlight ? 'text-accent-400' : 'text-accent-600'}`}>2026 Price</span>
                                        <span className={`font-bold font-serif ${plan.highlight ? 'text-white' : 'text-accent-700'}`}>{plan.nextPrice}</span>
                                    </div>
                                </div>

                                <p className={`text-sm mb-8 ${plan.highlight ? 'text-scout-300' : 'text-scout-500'}`}>{plan.desc}</p>
                                
                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <CheckCircle className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-sunny-500' : 'text-forest-500'}`} />
                                            <span className="text-sm font-medium leading-tight">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/#book" className="mt-auto">
                                    <Button 
                                        variant={plan.highlight ? 'white' : 'primary'}
                                        className="w-full"
                                    >
                                        Choose Plan
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Growing with Heart (Price Increase 2026 Letter) */}
            <section className="px-6 py-24 bg-scout-50 border-t border-scout-100">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <Heart className="w-12 h-12 text-accent-500 mx-auto mb-4" />
                        <h2 className="font-serif text-4xl md:text-5xl text-scout-900 mb-2">Growing with Heart</h2>
                        <p className="text-xl text-scout-500 font-medium">A note on our 2026 pricing.</p>
                    </div>

                    {/* Main Body - Increased font weight and darkness for better readability */}
                    <div className="prose prose-lg text-scout-800 leading-relaxed font-normal mx-auto mb-16">
                        <p className="mb-6">
                            Better pet care begins with people who are valued, supported and inspired. Our mission is to create better pet care for our community through enrichment by creating careers, not just paychecks, for the people taking care of your pets. 
                        </p>
                        <p className="mb-6">
                            Over the past five years, we have grown from a small team of 12 caregivers into a 35+ employee community built around the belief that your dog deserves the very best. Behind every great day your dog has at Camp is a team of humans that pour their hearts into their work.
                        </p>
                        <p className="mb-6">
                             Scout’s Honor is the only pet care provider in Bloomington AND the state of Indiana that <strong>starts employees at $15/hour</strong>. As the cost of living rises, we’ve made the choice to go beyond a “livable wage." We want to provide thriving wages that support the humans who care for your dogs.
                        </p>
                    </div>

                    {/* Cost Drivers Grid */}
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 mb-16 border border-scout-200">
                        <h3 className="font-serif text-2xl text-scout-900 mb-8 text-center">Where is the increase going?</h3>
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-sunny-100 p-2 rounded-full text-sunny-600"><DollarSign className="w-5 h-5" /></div>
                                    <h4 className="font-bold text-scout-900">Higher Pay</h4>
                                </div>
                                <p className="text-sm text-scout-600">Base pay increase of $1.36/hr for employees with us over 12 months (50% of our team) based on the 2026 Bloomington budget.</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-accent-100 p-2 rounded-full text-accent-600"><HeartHandshake className="w-5 h-5" /></div>
                                    <h4 className="font-bold text-scout-900">Health Insurance</h4>
                                </div>
                                <p className="text-sm text-scout-600">We will always offer health insurance to our full-time employees and do our part to ensure they can afford their premiums amidst rising costs.</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-forest-100 p-2 rounded-full text-forest-600"><Hammer className="w-5 h-5" /></div>
                                    <h4 className="font-bold text-scout-900">Renovations & New Facility</h4>
                                </div>
                                <p className="text-sm text-scout-600">Reflowing our current space for efficiency and opening a new facility with more lodging, grooming, and daycare capacity.</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-scout-200 p-2 rounded-full text-scout-700"><TrendingUp className="w-5 h-5" /></div>
                                    <h4 className="font-bold text-scout-900">Rising Operational Costs</h4>
                                </div>
                                <p className="text-sm text-scout-600">Software fees, credit card processing, food, cleaning supplies, and facility maintenance.</p>
                            </div>
                        </div>
                    </div>

                    {/* Closing & Signatures */}
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="text-scout-600 italic mb-10 leading-relaxed">
                            "Every dollar spent at Scout’s Honor goes back to the community, into the hands and hearts of the people who care for your dogs, into our animal shelter and humane association and into the continual improvement of the place your dogs love most outside of home."
                        </p>
                        
                        <div className="pt-8 border-t border-scout-200">
                             <p className="font-hand text-4xl text-scout-900 rotate-2 mb-2">Allison & Kristen</p>
                             <div className="text-xs font-bold uppercase tracking-widest text-scout-400">Allison Jacobs, CEO & Co-Owner</div>
                             <div className="text-xs font-bold uppercase tracking-widest text-scout-400">Kristen Perrus, COO & Co-Owner</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Requirements Box */}
            <section className="px-6 pb-24 bg-scout-50 pt-0">
                <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 border border-scout-200">
                    <div className="flex items-start gap-6">
                        <div className="bg-scout-50 p-3 rounded-full shadow-sm text-accent-500 hidden sm:block">
                            <AlertCircle className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl text-scout-900 mb-4">Requirements for Daycare</h3>
                            <ul className="space-y-3 text-scout-700">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-accent-500 rounded-full shrink-0"></span>
                                    <span><strong>Vaccinations:</strong> All dogs must be up to date on Rabies, DHPP (Distemper), and Bordetella.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-accent-500 rounded-full shrink-0"></span>
                                    <span><strong>Spay/Neuter:</strong> Puppies over 7 months of age must be spayed or neutered to participate in group play.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-accent-500 rounded-full shrink-0"></span>
                                    <span><strong>Assessment:</strong> A temperament test is required for all new dogs. This first day is <strong>free</strong> for local residents!</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};