import React, { useRef, useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Modal } from '../ui/Modal';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Hero: React.FC = () => {
  const heroRef = useScrollAnimation('animate-fade-in-up');
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/7606283-hd_1080_1920_30fps.mp4" type="video/mp4" />
      </video>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20" style={{ zIndex: 1 }} />
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ zIndex: 1 }} />
      <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{ zIndex: 1 }} />
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" style={{ zIndex: 1 }} />

      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge variant="primary" className="mb-8 bg-white/10 backdrop-blur-lg border border-white/20 text-white">
          <Sparkles className="w-4 h-4 mr-2" />
          New: Advanced AI Marketing Suite
        </Badge>

        <h1
          className="text-[32px] sm:text-[48px] md:text-[60px] font-medium font-sans leading-tight md:leading-[77px] text-white mb-6 text-center font-linter"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
            textAlign: 'center',
            leadingTrim: 'both',
            textEdge: 'cap',
          }}
        >
          Transform Your
          <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            {' '}Marketing{' '}
          </span>
          with AI
        </h1>

        <p
          className="text-[15px] sm:text-[16px] text-[#f3f4f6] font-normal font-sans leading-[22px] mb-8 sm:mb-10 max-w-3xl mx-auto px-2"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '22px',
            color: '#f3f4f6',
            leadingTrim: 'both',
            textEdge: 'cap',
          }}
        >
          ADmyBRAND AI Suite empowers businesses to create, optimize, and scale their marketing campaigns
          with cutting-edge artificial intelligence. Boost your ROI by 300% with our proven AI tools.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 w-full px-2">
          <Button size="lg" className="text-lg px-6 py-3 w-full sm:w-auto">
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-6 py-3 border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
            icon={BookOpen}
          >
            Read the docs
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto text-white px-2">
          <div className="text-center mb-4 md:mb-0">
            <div className="text-2xl sm:text-3xl font-bold text-primary-300 mb-2 font-linter">10,000+</div>
            <div className="text-white/80 text-base sm:text-lg">Active Users</div>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-2 font-linter">300%</div>
            <div className="text-white/80 text-base sm:text-lg">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary-500 mb-2 font-linter">24/7</div>
            <div className="text-white/80 text-base sm:text-lg">AI-Powered Support</div>
          </div>
        </div>
      </div>

      {/* Demo Video Modal */}
      <Modal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} title="ADmyBRAND Demo" size="xl">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <video controls className="w-full h-full rounded-xl">
            <source src="/700_F_513966423_FxXbW0RjXoBV7e5Fpxmi0GnLF5xrzxIx_ST.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </section>
  );
};