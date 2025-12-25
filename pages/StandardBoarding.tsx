import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Clock, Bed, Syringe, Plus, Minus, Info, 
    Utensils, Moon, ShieldCheck, Home, Star, Check,
    Calendar, AlertCircle, Heart, Users, Sparkles, ArrowDown,
    X, TrendingUp, HeartHandshake, Hammer, DollarSign
} from 'lucide-react';
import { Button } from '../components/Button';

// Pricing Data
const PACKAGES = [
    {
        name: "The Sleeper",
        price: "$70",
        nextPrice: "$75",
        unit: "per night",
        badge: "Base Stay",
        description: "Ideal for low-energy dogs or those who just need a safe place to rest.",
        includes: ["Standard Lodging", "3 Potty Breaks", "Wellness Checks"],
        activity: "No additional activity"
    },
    {
        name: "Hybrid",
        price: "$90",
        nextPrice: "$100",
        unit: "per night",
        badge: "Most Popular",
        description: "A balanced mix of socialization and downtime.",
        includes: ["Standard Lodging", "3 Potty Breaks", "Wellness Checks"],
        activity: "Small Group Play + Enrichment"
    },
    {
        name: "Solo",
        price: "$105",
        nextPrice: "$115",
        unit: "per night",
        badge: "For People-Pups",
        description: "Individual attention for dogs who prefer humans over other dogs.",
        includes: ["Standard Lodging", "3 Potty Breaks", "Wellness Checks"],
        activity: "1-on-1 Human Play + Private Walks"
    },
    {
        name: "Train",
        price: "$120",
        nextPrice: "$130",
        unit: "per night",
        badge: "Education",
        description: "Keep their mind sharp with daily professional training.",
        includes: ["Standard Lodging", "3 Potty Breaks", "Wellness Checks"],
        activity: "Daily Training Session + Report Card"
    }
];

const FAQS = [
    {
        question: "Are reservations required?",
        answer: "Yes! All of our daily spots are reserved exclusively for Pack Members. If spaces remain, waitlisted reservations are approved the day before."
    },
    {
        question: "What if my dog is destructive?",
        answer: "We utilize TNC Crates for dogs with high anxiety or destructive tendencies. These are custom, indestructible crates designed to keep your dog safe and secure."
    },
    {
        question: "Do you administer medications?",
        answer: "Yes. Our team is trained to administer oral and topical medications. Please ensure all medications are clearly labeled."
    }
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-scout-200 last:border-0">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-5 px-2 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="font-serif font-bold text-lg text-scout-900 group-hover:text-sunny-500 transition-colors">
                    {question}
                </span>
                <div className={`p-1 rounded-full border border-scout-200 transition-colors ${isOpen ? 'bg-scout-900 text-white border-scout-900' : 'bg-white text-scout-400 group-hover:border-sunny-500'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-scout-600 leading-relaxed px-2">{answer}</p>
            </div>
        </div>
    );
};

export const StandardBoarding: React.FC = () => {
    return (
        <div className="bg-transparent overflow-x-hidden pt-20">
            
            {/* Hero Section */}
            <section className="px-6 py-20 lg:py-24 relative bg-scout-50">
                 <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 bg-white border border-scout-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                            <Moon className="w-4 h-4 text-sunny-500 fill-current" />
                            <span className="text-xs font-bold uppercase tracking-widest text-scout-600">Standard Lodging</span>
                        </div>
                        
                        <h1 className="font-serif text-5xl md:text-7xl text-scout-900 mb-6 leading-[0.95]">
                            Safe. Structured. <br/><span className="text-sunny-500">Sleepovers.</span>
                        </h1>
                        
                        <p className="text-xl text-scout-600 leading-relaxed mb-8 max-w-lg">
                            Our Standard Boarding provides a safe, routine-based stay with private cabin accommodations and dedicated care staff.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/#packages">
                                <Button size="lg" className="w-full sm:w-auto shadow-xl bg-scout-900 text-white">
                                    View Packages
                                </Button>
                            </Link>
                            <a href="#compare">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    Compare vs Deluxe
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative">
                        <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                             <img 
                                src="https://static.wixstatic.com/media/75d544_d6fd6c147dfb490f801affebee5db781~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/75d544_d6fd6c147dfb490f801affebee5db781~mv2.jpg" 
                                alt="Standard boarding cabin" 
                                className="w-full h-full object-cover"
                             />
                        </div>
                    </div>
                 </div>
            </section>

            {/* Base Inclusions Section */}
            <section className="px-6 py-24 bg-white rounded-t-[3rem] -mt-10 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl text-scout-900 mb-4">Included in Every Standard Stay</h2>
                        <p className="text-xl text-scout-500 max-w-2xl mx-auto">
                            Regardless of the activity package you choose, every guest receives our high standard of care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-scout-50 p-8 rounded-[2rem] border border-scout-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-scout-900">
                                <Home className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-2xl text-scout-900 mb-3">Private Cabin</h3>
                            <p className="text-scout-600">
                                A secure 4'x6' climate-controlled cabin. Not a wire crate. Provides a personal space for rest and meals.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-scout-50 p-8 rounded-[2rem] border border-scout-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-scout-900">
                                <Bed className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-2xl text-scout-900 mb-3">Elevated Bedding</h3>
                            <p className="text-scout-600">
                                Every guest sleeps on a chew-resistant Kuranda cot to keep them off the floor and comfortable.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-scout-50 p-8 rounded-[2rem] border border-scout-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-scout-900">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-2xl text-scout-900 mb-3">Wellness Checks</h3>
                            <p className="text-scout-600">
                                Staff performs morning and evening nose-to-tail health checks plus 3 guaranteed potty breaks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section id="packages" className="px-6 py-24 bg-scout-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 text-white">
                        <span className="font-hand text-3xl text-sunny-500 block mb-2 -rotate-2">Step 2</span>
                        <h2 className="font-serif text-5xl">Select Your Activity</h2>
                        <p className="text-xl text-scout-200 mt-4">Combine our Standard Lodging with your preferred activity level.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PACKAGES.map((pkg, idx) => (
                            <div key={idx} className="bg-scout-800 rounded-[2.5rem] border border-scout-700 overflow-hidden flex flex-col hover:border-sunny-500 transition-colors duration-300">
                                <div className="p-1 bg-scout-700 text-center">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-scout-300">{pkg.badge}</span>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="font-serif text-3xl text-white mb-2">{pkg.name}</h3>
                                    
                                    <div className="mb-4">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold text-sunny-500">{pkg.price}</span>
                                            <span className="text-sm text-scout-400">{pkg.unit}</span>
                                        </div>
                                        {/* 2026 Price */}
                                        <div className="mt-2 bg-scout-900/50 p-2 rounded-lg border border-scout-600 flex justify-between items-center">
                                             <span className="text-[10px] font-bold uppercase tracking-widest text-accent-500">2026 Price</span>
                                             <span className="text-white font-bold font-serif">{pkg.nextPrice}</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-scout-300 mb-6 leading-relaxed border-b border-scout-700 pb-6">
                                        {pkg.description}
                                    </p>
                                    
                                    <div className="space-y-4 flex-1">
                                        <div>
                                            <span className="text-xs font-bold text-scout-500 uppercase tracking-wider block mb-2">Lodging</span>
                                            <div className="flex items-center text-white text-sm">
                                                <Check className="w-4 h-4 text-scout-500 mr-2" /> Standard Cabin
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-sunny-500 uppercase tracking-wider block mb-2">Activity</span>
                                            <div className="flex items-center text-white text-sm font-bold">
                                                <Sparkles className="w-4 h-4 text-sunny-500 mr-2" /> {pkg.activity}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <Link to="/#book" className="block">
                                            {/* Updated to use white variant for readability on dark backgrounds */}
                                            <Button variant="white" className="w-full">Book Now</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section id="compare" className="px-6 py-24 bg-scout-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl text-scout-900 mb-4">Standard vs. Deluxe</h2>
                        <p className="text-xl text-scout-600">Which lodging experience is right for your dog?</p>
                    </div>

                    <div className="bg-white rounded-[2.5rem] shadow-sm border border-scout-200 overflow-hidden">
                        <div className="grid grid-cols-3 bg-scout-100 p-4 font-bold text-scout-900 uppercase tracking-widest text-xs md:text-sm">
                            <div className="col-span-1 pl-4">Feature</div>
                            <div className="col-span-1 text-center">Standard</div>
                            <div className="col-span-1 text-center text-sunny-600">Deluxe</div>
                        </div>

                        {/* Rows */}
                        {[
                            { label: "Lodging Type", std: "Wire/Social Cabin", dlx: "Solid Wall Suite" },
                            { label: "Bedding", std: "Elevated Cot", dlx: "Orthopedic Memory Foam" },
                            { label: "Quiet Wing", std: <X className="w-5 h-5 text-scout-300 mx-auto" />, dlx: <Check className="w-5 h-5 text-sunny-500 mx-auto" /> },
                            { label: "Potty Breaks", std: "3 per day", dlx: "4 per day" },
                            { label: "Daily Report Card", std: "Internal Log Only", dlx: "Digital + Photos Sent to You" },
                            { label: "Tuck-in Service", std: <X className="w-5 h-5 text-scout-300 mx-auto" />, dlx: <Check className="w-5 h-5 text-sunny-500 mx-auto" /> },
                            { label: "Calming Treats", std: <X className="w-5 h-5 text-scout-300 mx-auto" />, dlx: <Check className="w-5 h-5 text-sunny-500 mx-auto" /> },
                        ].map((row, idx) => (
                            <div key={idx} className="grid grid-cols-3 p-4 border-b border-scout-100 items-center hover:bg-scout-50 transition-colors">
                                <div className="col-span-1 pl-4 font-bold text-scout-800 text-sm md:text-base">{row.label}</div>
                                <div className="col-span-1 text-center text-scout-600 text-sm">{row.std}</div>
                                <div className="col-span-1 text-center text-scout-900 font-medium text-sm">{row.dlx}</div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-scout-500 mb-4">Looking for more luxury?</p>
                        <Link to="/boarding/deluxe">
                            <Button variant="outline">View Deluxe Boarding</Button>
                        </Link>
                    </div>
                </div>
            </section>

             {/* Growing with Heart (Price Increase 2026 Letter) */}
            <section className="px-6 py-24 bg-white border-t border-scout-100">
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
                    <div className="bg-scout-50 rounded-[2.5rem] p-8 md:p-12 mb-16 border border-scout-200">
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
                        
                        <div className="pt-8 border-t border-scout-100">
                             <p className="font-hand text-4xl text-scout-900 rotate-2 mb-2">Allison & Kristen</p>
                             <div className="text-xs font-bold uppercase tracking-widest text-scout-400">Allison Jacobs, CEO & Co-Owner</div>
                             <div className="text-xs font-bold uppercase tracking-widest text-scout-400">Kristen Perrus, COO & Co-Owner</div>
                        </div>
                    </div>
                </div>
            </section>

             {/* CTA */}
             <section className="py-24 bg-[#2C241B] text-center text-scout-50 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Let's get your reservation started.</h2>
                    <p className="text-xl text-scout-200 mb-10 max-w-xl mx-auto font-light">
                        New clients need to create an account and upload vaccinations before booking.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/#book">
                            <Button className="bg-sunny-500 text-white hover:bg-sunny-600 border-none text-xl px-12 py-5 rounded-full shadow-lg hover:-translate-y-1 font-bold">
                                Create Account / Book Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};