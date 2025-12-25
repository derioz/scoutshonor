import React from 'react';
import { Dog, Bone, Scissors, GraduationCap, Sparkles, Home, Star } from 'lucide-react';
import { ServiceItem, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'Enrichment', path: '/enrichment' },
  { 
    name: 'Boarding', 
    path: '/boarding',
    submenu: [
      { name: 'Standard Boarding', path: '/boarding/standard' },
      { name: 'Deluxe Boarding', path: '/boarding/deluxe' }, // Placeholder based on content
    ]
  },
  { name: 'Daycare', path: '/daycare' },
  { name: 'Training', path: '/training' },
  { name: 'Grooming', path: '/grooming' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'boarding',
    title: 'Luxury Boarding',
    description: 'A home away from home. Climate-controlled suites, orthopedic bedding, and nightly tuck-ins.',
    icon: <Home className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/dogboarding/800/600',
    price: 'From $55/night',
    features: ['24/7 Monitoring', 'Private Suites', 'Daily Group Play']
  },
  {
    id: 'daycare',
    title: 'Dog Daycare',
    description: 'Structured playgroups categorized by size and temperament. Maximum fun, maximum safety.',
    icon: <Dog className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/dogdaycare/800/600',
    price: 'From $35/day',
    features: ['Temperament Tested', 'Indoor/Outdoor Access', 'Webcam Access']
  },
  {
    id: 'grooming',
    title: 'Spa & Grooming',
    description: 'From bath & brush to full breed-specific cuts. Our stylists make every pup look their best.',
    icon: <Scissors className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/doggrooming/800/600',
    price: 'Varies by breed',
    features: ['Blueberry Facials', 'Deshedding', 'Nail Dremel']
  },
  {
    id: 'training',
    title: 'Academy Training',
    description: 'Positive reinforcement training for puppies and adults. Manners, obedience, and tricks.',
    icon: <GraduationCap className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/dogtraining/800/600',
    price: 'Consultation required',
    features: ['Board & Train', 'Group Classes', 'Private Lessons']
  },
  {
    id: 'enrichment',
    title: 'Enrichment Plus',
    description: 'Brain games, puzzles, and sensory activities for the dog who needs a little extra challenge.',
    icon: <Sparkles className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/dogenrichment/800/600',
    price: '+$15/session',
    features: ['Puzzle Toys', 'Scent Work', 'Agility Basics']
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Kyle Trinkle",
    date: "10/16/2025",
    text: "They send me report cards daily to let me know what she did during the day and how she is eating, plus pictures of her with other dogs she pals around with during her stay.",
    rating: 5
  },
  {
    id: 2,
    name: "Danielle Toner",
    date: "10/13/2025",
    text: "Scouts Honor always does a great job caring for my sweet boy Micky. The daily reports let me know how comfortable he is feeling in his environment. He's always a little nervous on the first day.",
    rating: 5
  },
  {
    id: 3,
    name: "Nick Moon",
    date: "08/21/2025",
    text: "Staff is always friendly and welcoming. They ensure my dog is comfortable and are attentive to his needs for the day. Very happy with the services offered",
    rating: 5
  },
  {
    id: 4,
    name: "Samantha Sisk",
    date: "08/07/2025",
    text: "My dog came home happy and exhausted. I loved getting the pictures of his experience while there during the day and a report card detailing his day.",
    rating: 5
  }
];