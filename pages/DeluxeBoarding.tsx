import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Clock, Bed, Syringe, Plus, Minus, Info, 
    Utensils, Moon, ShieldCheck, Home, Star, Check,
    Calendar, AlertCircle, Heart, Users, Sparkles, ArrowDown,
    BookOpen, Smile, Cookie, X, TrendingUp, HeartHandshake, Hammer, DollarSign
} from 'lucide-react';
import { Button } from '../components/Button';

// Pricing Data
const PACKAGES = [
    {
        name: "Deluxe Rest",
        price: "$85",
        nextPrice: "$90",
        unit: "per night",
        badge: "Luxury Base",
        description: "The ultimate pampering experience with relaxation focus.",
        includes: ["Deluxe Suite", "Tuck-in Service", "Daily Report Card"],
        activity: "No additional activity"
    },
    {
        name: "Deluxe Hybrid",
        price: "$100",
        nextPrice: "$110",
        unit: "per night",
        badge: "Most Popular",
        description: "Luxury living combined with social play.",
        includes: ["Deluxe Suite", "Tuck-in Service", "Daily Report Card"],
        activity: "Small Group Play + Enrichment"
    },
    {
        name: "Deluxe Solo",
        price: "$120",
        nextPrice: "$130",
        unit: "per night",
        badge: "VIP Treatment",
        description: "Private attention and luxury for the discerning pup.",
        includes: ["Deluxe Suite", "Tuck-in Service", "Daily Report Card"],
        activity: "1-on-1 Human Play + Solo Enrichment"
    },
    {
        name: "Deluxe Train",
        price: "$130",
        nextPrice: "$140",
        unit: "per night",
        badge: "Top Tier",
        description: "Complete physical and mental engagement + luxury rest.",
        includes: ["Deluxe Suite", "Tuck-in Service", "Daily Report Card"],
        activity: "Daily Training Session + Skill Work"
    }
];

export const DeluxeBoarding: React.FC = () => {
    return (
        <div className="bg-transparent overflow-x-hidden pt-20">
            
            {/* Hero Section */}
            <section className="px-6 py-20 lg:py-24 relative bg-scout-50">
                 <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 bg-white border border-scout-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                            <Sparkles className="w-4 h-4 text-sunny-500 fill-current" />
                            <span className="text-xs font-bold uppercase tracking-widest text-scout-600">Premium Experience</span>
                        </div>
                        
                        <h1 className="font-serif text-5xl md:text-7xl text-scout-900 mb-6 leading-[0.95]">
                            The Ultimate <br/><span className="text-sunny-500">Sleepover.</span>
                        </h1>
                        
                        <p className="text-xl text-scout-600 leading-relaxed mb-8 max-w-lg">
                            Deluxe Boarding offers a more enriching and personalized experience than standard boarding. Designed for dogs who thrive on extra engagement and comfort.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/#packages">
                                <Button size="lg" className="w-full sm:w-auto shadow-xl bg-scout-900 text-white">
                                    View Deluxe Packages
                                </Button>
                            </Link>
                            <a href="#compare">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    Compare vs Standard
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative">
                        <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                             <img 
                                src="https://static.wixstatic.com/media/e69144_6eaf152a4a0f411c8d4a80af395f3f57~mv2.jpg/v1/fill/w_960,h_724,q_90,enc_avif,quality_auto/e69144_6eaf152a4a0f411c8d4a80af395f3f57~mv2.jpg" 
                                alt="Dog getting tucked in" 
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
                        <h2 className="font-serif text-4xl md:text-5xl text-scout-900 mb-4">Included in Every Deluxe Stay</h2>
                        <p className="text-xl text-scout-500 max-w-2xl mx-auto">
                            The Deluxe experience is an upgrade to the lodging itself. Every Deluxe guest receives these exclusive amenities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-scout-50 p-6 rounded-[2rem] border border-scout-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 text-sunny-500 rotate-2">
                                <Bed className="w-7 h-7" />
                            </div>
                            <h3 className="font-serif text-xl text-scout-900 mb-2">Private Suite</h3>
                            <p className="text-sm text-scout-600">
                                Located in a quiet, sound-dampened wing with solid walls for privacy and orthopedic memory foam bedding.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-scout-50 p-6 rounded-[2rem] border border-scout-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 text-sunny-500 -rotate-2">
                                <Moon className="w-7 h-7" />
                            </div>
                            <h3 className="font-serif text-xl text-scout-900 mb-2">Nightly Tuck-in</h3>
                            <p className="text-sm text-scout-600">
                                A personalized bedtime routine featuring a story, calming music, and a delicious bedtime biscuit.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-scout-50 p-6 rounded-[2rem] border border-scout-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 text-sunny-500 rotate-2">
                                <Users className="w-7 h-7" />
                            </div>
                            <h3 className="font-serif text-xl text-scout-900 mb-2">Communication</h3>
                            <p className="text-sm text-scout-600">
                                Receive a daily digital report card every evening including photos of your pet's activities and mood.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="bg-scout-50 p-6 rounded-[2rem] border border-scout-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 text-sunny-500 -rotate-2">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="font-serif text-xl text-scout-900 mb-2">Extra Care</h3>
                            <p className="text-sm text-scout-600">
                                4 guaranteed potty breaks daily plus morning, midday, and evening wellness checks.
                            </p>
                        </div>
                    </div>
                    
                    {/* Fear Free Banner */}
                    <div className="mt-12 bg-forest-50 border border-forest-100 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="bg-white p-3 rounded-full shrink-0">
                            <Heart className="w-8 h-8 text-forest-500 fill-current" />
                        </div>
                        <div>
                            <h4 className="font-bold text-scout-900 text-lg">Fear Free® Principles</h4>
                            <p className="text-scout-700 text-sm">Our Deluxe program is specifically designed to reduce Fear, Anxiety, and Stress (FAS) through calming pheromones, soothing classical music, and cooperative care techniques.</p>
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
                        <p className="text-xl text-scout-200 mt-4">Combine our Deluxe Lodging with your preferred activity level.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PACKAGES.map((pkg, idx) => (
                            <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                                <div className="p-1 bg-sunny-100 text-center">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-sunny-600">{pkg.badge}</span>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="font-serif text-3xl text-scout-900 mb-2">{pkg.name}</h3>
                                    
                                    <div className="mb-4">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold text-scout-900">{pkg.price}</span>
                                            <span className="text-sm text-scout-500">{pkg.unit}</span>
                                        </div>
                                        {/* 2026 Price */}
                                        <div className="mt-2 bg-accent-50 p-2 rounded-lg border border-accent-100 flex justify-between items-center">
                                             <span className="text-[10px] font-bold uppercase tracking-widest text-accent-600">2026 Price</span>
                                             <span className="text-accent-700 font-bold font-serif">{pkg.nextPrice}</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-scout-600 mb-6 leading-relaxed border-b border-scout-100 pb-6">
                                        {pkg.description}
                                    </p>
                                    
                                    <div className="space-y-4 flex-1">
                                        <div>
                                            <span className="text-xs font-bold text-scout-400 uppercase tracking-wider block mb-2">Lodging</span>
                                            <div className="flex items-center text-scout-800 text-sm font-medium">
                                                <Check className="w-4 h-4 text-sunny-500 mr-2" /> Deluxe Suite
                                            </div>
                                            <div className="flex items-center text-scout-800 text-sm font-medium mt-1">
                                                <Check className="w-4 h-4 text-sunny-500 mr-2" /> Report Card & Tuck-in
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-sunny-500 uppercase tracking-wider block mb-2">Activity</span>
                                            <div className="flex items-center text-scout-900 text-sm font-bold">
                                                <Sparkles className="w-4 h-4 text-sunny-500 mr-2" /> {pkg.activity}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <Link to="/#book" className="block">
                                            <Button className="w-full bg-scout-900 text-white hover:bg-scout-800">Book Now</Button>
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
                        <h2 className="font-serif text-4xl text-scout-900 mb-4">Deluxe vs. Standard</h2>
                        <p className="text-xl text-scout-600">See the difference luxury makes.</p>
                    </div>

                    <div className="bg-white rounded-[2.5rem] shadow-sm border border-scout-200 overflow-hidden">
                        <div className="grid grid-cols-3 bg-scout-900 p-4 font-bold text-white uppercase tracking-widest text-xs md:text-sm">
                            <div className="col-span-1 pl-4">Feature</div>
                            <div className="col-span-1 text-center opacity-70">Standard</div>
                            <div className="col-span-1 text-center text-sunny-400">Deluxe</div>
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
                                <div className="col-span-1 text-center text-scout-900 font-bold text-sm bg-sunny-50/50 py-1 rounded-lg">{row.dlx}</div>
                            </div>
                        ))}
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
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Give your dog the vacation they deserve.</h2>
                    <p className="text-xl text-scout-200 mb-10 max-w-xl mx-auto font-light">
                        Book a Deluxe stay today for the ultimate peace of mind.
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