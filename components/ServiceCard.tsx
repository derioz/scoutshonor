import React from 'react';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';
import { ServiceItem } from '../types';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
  variant?: 'default' | 'overlay' | 'minimal';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className = '', variant = 'default' }) => {
  // The Overlay Variant
  if (variant === 'overlay') {
    return (
      <Link to={`/${service.id}`} className={`group relative block overflow-hidden rounded-[2.5rem] ${className}`}>
        <div className="absolute inset-0 bg-scout-900/20 group-hover:bg-scout-900/10 transition-colors z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 z-20" />
        <img 
          src={service.image} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="relative z-30 h-full flex flex-col justify-end p-8">
          <div className="bg-white/10 backdrop-blur-md w-fit p-3 rounded-2xl mb-4 text-white">
            {service.icon}
          </div>
          <h3 className="text-3xl font-serif font-bold text-white mb-2">{service.title}</h3>
          <p className="text-white/80 line-clamp-2 mb-4 group-hover:text-white transition-colors">{service.description}</p>
          <div className="flex items-center text-white font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            Explore Service <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </Link>
    );
  }

  // The Minimal Variant (Updated for new aesthetic)
  if (variant === 'minimal') {
    return (
      <Link to={`/${service.id}`} className={`group flex flex-col gap-4 ${className}`}>
        <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] w-full border border-scout-100 bg-scout-50 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="bg-white text-scout-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                   View Details
                </span>
            </div>
        </div>
        <div>
            <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-serif font-bold text-2xl text-scout-900 group-hover:text-forest-600 transition-colors">{service.title}</h3>
                <span className="text-sm font-medium text-scout-500">{service.price}</span>
            </div>
            <p className="text-scout-600 line-clamp-2 leading-relaxed">{service.description}</p>
        </div>
      </Link>
    );
  }

  // Default Variant
  return (
    <div className={`group relative bg-white rounded-[2.5rem] overflow-hidden border border-scout-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${className}`}>
      <div className="relative h-64 overflow-hidden rounded-[2.5rem] m-2">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-[2rem]"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full z-20 text-scout-800 shadow-sm">
          {service.icon}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-serif font-bold text-scout-900 mb-2">{service.title}</h3>
        <p className="text-scout-600 mb-6 flex-1 leading-relaxed">{service.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-scout-50">
          <span className="font-bold text-scout-900">{service.price}</span>
          <Link to={`/${service.id}`} className="flex items-center text-accent-600 font-bold hover:text-accent-500 transition-colors group/link">
            Details 
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};