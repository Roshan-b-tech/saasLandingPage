import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useScrollAnimation('animate-fade-in-up');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Effects */}
      {/* Removed overlays for white bg */}
      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Get in Touch
          </h2>
          <p
            className="text-[18px] text-[#5F5F64] font-normal font-sans leading-[26px] text-center max-w-3xl mx-auto"
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
            Ready to transform your marketing with AI? Contact us today for a personalized demo
            and see how ADmyBRAND can boost your ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-gray-200 bg-transparent">
              <h3 className="text-2xl font-bold text-[#151515] mb-6 font-linter">Let's Talk</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-[#151515] font-semibold">Email Us</div>
                    <div className="text-[#5F5F64]">hello@admybrand.ai</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-[#151515] font-semibold">Call Us</div>
                    <div className="text-[#5F5F64]">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-[#151515] font-semibold">Visit Us</div>
                    <div className="text-[#5F5F64]">
                      123 AI Street<br />
                      San Francisco, CA 94105
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Removed Why Choose ADmyBRAND card */}
          </div>
          {/* Contact Form */}
          <div className="p-8 rounded-2xl border border-gray-200 bg-transparent">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#151515] mb-4 font-linter">Message Sent!</h3>
                <p className="text-[#5F5F64] mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="border-primary-200 text-primary-600 hover:bg-primary-50"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-[#151515] mb-6 font-linter">Send us a Message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Name"
                    variant="default"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    error={errors.name}
                    placeholder="Your full name"
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    variant="default"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    error={errors.email}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <Input
                  label="Company"
                  variant="default"
                  value={formData.company}
                  onChange={handleInputChange('company')}
                  placeholder="Your company name (optional)"
                />
                <Textarea
                  label="Message"
                  variant="default"
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  error={errors.message}
                  placeholder="Tell us about your marketing goals and how we can help..."
                  required
                  rows={5}
                />
                <Button
                  type="submit"
                  size="lg"
                  loading={isSubmitting}
                  className="w-full"
                  icon={Send}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
