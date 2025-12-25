import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Button } from '../components/Button';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-24">
        <h2 className="text-2xl font-bold text-scout-900">Service Not Found</h2>
        <Link to="/" className="mt-4 text-accent-500 underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-scout-600 hover:text-scout-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-scout-100">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto min-h-[400px]">
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
            </div>
            
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-6 text-accent-500">
                {service.icon}
                <span className="font-bold tracking-widest uppercase text-sm">Best in Class</span>
              </div>
              
              <h1 className="font-serif font-bold text-4xl md:text-5xl text-scout-900 mb-6">{service.title}</h1>
              <p className="text-xl text-scout-600 mb-8 leading-relaxed">{service.description}</p>
              
              <div className="bg-scout-50 p-8 rounded-3xl mb-8">
                <h3 className="font-bold text-scout-900 mb-4">What's Included:</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                      <span className="text-scout-700">{feature}</span>
                    </li>
                  ))}
                  <li key="extra" className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                    <span className="text-scout-700">Daily Photo Updates</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                   <span className="block text-sm text-scout-500">Starting at</span>
                   <span className="text-3xl font-bold text-scout-900">{service.price}</span>
                </div>
                <Button size="lg">Book Reservation</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};