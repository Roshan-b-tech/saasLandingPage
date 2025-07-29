import React from 'react';
import { Card } from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import {
  Brain,
  Target,
  BarChart3,
  Zap,
  MessageSquare,
  Globe,
  Palette,
  TrendingUp
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Content Generation',
    description: 'Generate high-converting ad copy, blog posts, and social media content in seconds with our advanced AI models.'
  },
  {
    icon: Target,
    title: 'Smart Audience Targeting',
    description: 'Identify and reach your ideal customers with precision using AI-powered audience analysis and segmentation.'
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Forecast campaign performance and optimize your marketing spend with machine learning insights.'
  },
  {
    icon: Zap,
    title: 'Automated A/B Testing',
    description: 'Run intelligent A/B tests that automatically optimize for your best-performing variations.'
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbot Integration',
    description: 'Deploy conversational AI that nurtures leads and provides 24/7 customer support across all channels.'
  },
  {
    icon: Globe,
    title: 'Multi-Platform Management',
    description: 'Manage campaigns across Facebook, Google, LinkedIn, and more from a single, unified dashboard.'
  },
  {
    icon: Palette,
    title: 'Creative Asset Generator',
    description: 'Create stunning visuals, videos, and graphics tailored to your brand with AI-powered design tools.'
  },
  {
    icon: TrendingUp,
    title: 'ROI Optimization',
    description: 'Maximize your return on investment with real-time optimization algorithms that adapt to market changes.'
  }
];

export const Features: React.FC = () => {
  const sectionRef = useScrollAnimation('animate-fade-in-up');

  return (
    <>
      <section className="py-24 bg-gray-50">
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
              Powerful Features That Drive Results
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
              Discover how our AI-powered marketing suite can transform your business
              and drive unprecedented growth across all your marketing channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                hover
                className="text-center group px-4 py-6 sm:px-6 sm:py-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 font-linter">
                  {feature.title}
                </h3>
                <p
                  className="text-[15px] sm:text-[16px] text-[#242426] font-normal font-sans leading-[22px]"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '22px',
                    color: '#242426',
                    leadingTrim: 'both',
                    textEdge: 'cap',
                  }}
                >
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium font-sans text-[#151515] text-center font-linter mb-4">Resources & Insights</h2>
            <p className="text-[15px] sm:text-[18px] text-[#5F5F64] font-normal font-sans leading-[22px] sm:leading-[26px] text-center max-w-2xl mx-auto mb-6">Explore the latest articles, guides, and case studies to help you get the most out of ADmyBRAND AI Suite.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              image: '/Artificial-IntelligenceAI-In-Business-1024x569.png',
              title: 'How AI is Transforming Marketing in 2025',
              summary: 'Discover the top trends and strategies for leveraging AI in your marketing campaigns this year.',
              link: '#'
            }, {
              image: '/Fj64iuzWQAU4mWO.jpeg',
              title: 'Case Study: 300% ROI with ADmyBRAND',
              summary: 'See how a real business used our suite to triple their marketing ROI in just 6 months.',
              link: '#'
            }, {
              image: '/z45sJMbLlkKKSHdipFvNezYMU.png',
              title: 'The Ultimate Guide to AI-Powered Content',
              summary: 'Learn how to create high-converting content at scale using the latest AI tools and techniques.',
              link: '#'
            }].map((post, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col h-full transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
                  {post.image.endsWith('.mp4') ? (
                    <video src={post.image} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                  ) : (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#151515] mb-2 font-linter">{post.title}</h3>
                <p className="text-[#5F5F64] text-sm mb-4 flex-1">{post.summary}</p>
                <a href={post.link} className="text-primary-600 font-semibold hover:underline mt-auto">Read More &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};