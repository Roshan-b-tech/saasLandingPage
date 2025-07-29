import React from 'react';
import { Accordion, AccordionItem } from '../ui/Accordion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// import { motion } from 'framer-motion'; // No longer needed here

const faqs = [
  {
    question: 'How does the AI content generation work?',
    answer: 'Our AI uses advanced natural language processing models trained on millions of high-converting marketing materials. Simply input your product details, target audience, and campaign goals, and our AI will generate compelling copy, headlines, and creative content tailored to your brand voice.'
  },
  {
    question: 'Can I integrate ADmyBRAND with my existing marketing tools?',
    answer: 'Yes! ADmyBRAND integrates seamlessly with over 50+ popular marketing platforms including Google Ads, Facebook Ads Manager, HubSpot, Salesforce, Mailchimp, and many more. Our API also allows for custom integrations with your existing tech stack.'
  },
  {
    question: 'What kind of ROI can I expect?',
    answer: 'Our customers typically see a 200-400% increase in ROI within the first 3 months. The exact results depend on your industry, current marketing performance, and how actively you use our optimization features. We offer a 14-day free trial so you can see results for yourself.'
  },
  {
    question: 'Is my data secure with ADmyBRAND?',
    answer: 'Absolutely. We take data security seriously and are SOC 2 Type II certified. All data is encrypted in transit and at rest, and we never share your data with third parties. We also offer enterprise-grade security features for larger organizations.'
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes! We provide 24/7 support through multiple channels. Starter plan users get email support, Professional users get priority support with live chat, and Enterprise customers receive dedicated account management with phone support.'
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. If you cancel, you\'ll continue to have access to your plan features until the end of your current billing period. We also offer a 30-day money-back guarantee.'
  },
  {
    question: 'How does the predictive analytics feature work?',
    answer: 'Our predictive analytics uses machine learning algorithms to analyze your historical campaign data, market trends, and competitor performance. It then forecasts campaign outcomes, suggests optimal budget allocation, and identifies the best times to launch campaigns for maximum impact.'
  },
  {
    question: 'Is there a limit to how many campaigns I can run?',
    answer: 'No, there are no limits on the number of campaigns you can create and manage. However, the AI content generation does have monthly word limits based on your plan. You can always upgrade or purchase additional words if needed.'
  }
];

export const FAQ: React.FC = () => {
  const sectionRef = useScrollAnimation('animate-fade-in-up');

  return (
    <section className="py-24 bg-white">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-[42px] font-medium font-sans text-[#151515] text-center font-linter mb-6"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '42px',
              lineHeight: 'normal',
              color: '#151515',
              textAlign: 'center',
              leadingTrim: 'both',
              textEdge: 'cap',
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about ADmyBRAND AI Suite
          </p>
        </div>
        <Accordion allowMultiple>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};