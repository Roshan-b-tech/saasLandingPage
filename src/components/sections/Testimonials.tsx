import React, { useState, useEffect } from 'react';
import { Card } from '../ui/Card';
import { Avatar } from '../ui/Avatar';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
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
        <div className="text-center mb-16">
          <h2
            className="text-[28px] sm:text-[36px] md:text-[42px] font-medium font-sans text-[#151515] text-center font-linter mb-6"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              color: '#151515',
              textAlign: 'center',
              leadingTrim: 'both',
              textEdge: 'cap',
            }}
          >
            What Our Customers Say
          </h2>
          <p
            className="text-[15px] sm:text-[18px] text-[#5F5F64] font-normal font-sans leading-[22px] sm:leading-[26px] text-center max-w-3xl mx-auto mb-6 sm:mb-8 px-2"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '26px',
              color: '#5F5F64',
              textAlign: 'center',
              leadingTrim: 'both',
              textEdge: 'cap',
            }}
          >
            Join thousands of satisfied customers who have transformed their marketing
            with ADmyBRAND AI Suite.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-2">
          <Card className="text-center px-4 py-6 sm:px-8 sm:py-10" padding="lg">
            <div className="flex justify-center mb-4 sm:mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-base sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <Avatar
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                size="lg"
              />
              <div className="text-center sm:text-left">
                <div className="font-semibold text-gray-900 text-base sm:text-lg font-linter">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  {testimonials[currentIndex].title} at {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </Card>
          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 sm:-translate-x-12 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 sm:translate-x-12 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};