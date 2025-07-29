import React, { useState, useEffect, useRef } from 'react';
import { Card } from '../ui/Card';
import { Avatar } from '../ui/Avatar';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import gsap from 'gsap';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Marketing Director',
    company: 'TechStart Inc.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'ADmyBRAND AI Suite transformed our marketing completely. We saw a 400% increase in lead generation within the first month. The AI-powered content creation saves us 20+ hours per week.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    title: 'CEO',
    company: 'GrowthLab',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'The predictive analytics feature is a game-changer. We can now forecast campaign performance with 95% accuracy and optimize our ad spend accordingly. ROI has never been better.',
    rating: 5
  },
  {
    name: 'Emma Rodriguez',
    title: 'Digital Marketing Manager',
    company: 'E-commerce Plus',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'The multi-platform management is incredible. Managing campaigns across Facebook, Google, and LinkedIn from one dashboard has streamlined our entire workflow. Highly recommend!',
    rating: 5
  },
  {
    name: 'David Park',
    title: 'Founder',
    company: 'Innovation Labs',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'As a startup, we needed cost-effective marketing solutions. ADmyBRAND delivered beyond expectations. The AI chatbot alone has converted 30% more leads than our previous system.',
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useScrollAnimation('animate-fade-in-up');
  const cardRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', clearProps: 'opacity' }
      );
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // GSAP marquee effect
  useEffect(() => {
    if (marqueeRef.current) {
      const ctx = gsap.context(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;
        gsap.to(marquee, {
          xPercent: -50,
          repeat: -1,
          duration: 20,
          ease: 'linear',
        });
      }, marqueeRef);
      return () => ctx.revert();
    }
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Only show the marquee, remove title and description */}
        <div className="overflow-hidden mt-0">
          <div ref={marqueeRef} className="flex w-[200%]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="flex flex-col items-center justify-center bg-white/80 rounded-xl shadow p-4 mx-2 min-w-[220px] max-w-xs">
                <Avatar src={t.avatar} alt={t.name} size="md" />
                <div className="font-semibold text-gray-900 text-sm mt-2">{t.name}</div>
                <div className="text-xs text-gray-500 text-center mt-1 line-clamp-2">"{t.content.split('.').slice(0, 1)[0]}."</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};