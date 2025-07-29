import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Toggle } from '../ui/Toggle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      'AI Content Generation (1,000 words/month)',
      'Basic Analytics Dashboard',
      'Email Campaign Automation',
      'Social Media Scheduling',
      'Basic A/B Testing',
      'Email Support'
    ],
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and marketing teams',
    monthlyPrice: 79,
    yearlyPrice: 790,
    features: [
      'AI Content Generation (10,000 words/month)',
      'Advanced Analytics & Reporting',
      'Multi-Channel Campaign Management',
      'Advanced A/B Testing',
      'Audience Segmentation',
      'Predictive Analytics',
      'AI Chatbot Integration',
      'Priority Support'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    features: [
      'Unlimited AI Content Generation',
      'Custom AI Model Training',
      'White-label Solutions',
      'Advanced API Access',
      'Dedicated Account Manager',
      'Custom Integrations',
      'Advanced Security Features',
      '24/7 Phone Support',
      'Custom Reporting'
    ],
    popular: false
  }
];

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [userCount, setUserCount] = useState(1);
  const sectionRef = useScrollAnimation('animate-fade-in-up');

  return (
    <section className="py-24 bg-white">
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
            Choose Your Perfect Plan
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
            Choose the perfect plan for your business. All plans include a 14-day free trial
            with no credit card required.
          </p>

          <div className="flex items-center justify-center space-x-4">
            <span className={`text-lg font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <Toggle
              checked={isYearly}
              onChange={setIsYearly}
              size="lg"
            />
            <span className={`text-lg font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            <Badge variant="success" className="ml-2">
              Save 20%
            </Badge>
          </div>
        </div>

        {/* Pricing Calculator */}
        <div className="max-w-xl mx-auto mb-10 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col items-center">
          <label htmlFor="userRange" className="block text-lg font-medium text-gray-900 mb-2">Estimate Your Price</label>
          <div className="w-full flex flex-col sm:flex-row items-center gap-4">
            <input
              id="userRange"
              type="range"
              min={1}
              max={100}
              value={userCount}
              onChange={e => setUserCount(Number(e.target.value))}
              className="w-full accent-primary-600"
            />
            <span className="text-primary-600 font-bold text-lg min-w-[60px] text-center">{userCount} user{userCount > 1 ? 's' : ''}</span>
          </div>
          <div className="mt-4 text-2xl font-bold text-primary-600">${isYearly ? (userCount * 20) : (userCount * 3)} / {isYearly ? 'year' : 'month'}</div>
          <div className="text-gray-500 text-sm mt-1">(Estimation based on ${isYearly ? '20' : '3'} per user)</div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative px-4 py-6 sm:px-6 sm:py-8 ${plan.popular ? 'ring-2 ring-primary-600 scale-105' : ''}`}
              hover
            >
              {plan.popular && (
                <Badge
                  variant="primary"
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white"
                >
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </Badge>
              )}

              <div className="text-center mb-8">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 font-linter">{plan.name}</h3>
                <p className="text-gray-600 mb-6 text-base sm:text-lg">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-3xl sm:text-5xl font-bold text-gray-900 font-linter">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 text-base sm:text-lg">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  Start Free Trial
                </Button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-2">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Need a custom solution? We've got you covered.
          </p>
          <Button variant="ghost" size="lg" className="w-full sm:w-auto">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};