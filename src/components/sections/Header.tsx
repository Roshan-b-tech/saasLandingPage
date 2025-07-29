import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Menu, X, ChevronDown, Sparkles, Play, Users, BookOpen, Phone } from 'lucide-react';

const navigationItems = [
  {
    name: 'Features',
    href: '#features',
    description: 'AI-powered marketing tools'
  },
  {
    name: 'Pricing',
    href: '#pricing',
    description: 'Simple, transparent pricing'
  },
  {
    name: 'Resources',
    href: '#',
    hasDropdown: true,
    items: [
      { name: 'Blog', href: '#', icon: BookOpen, description: 'Latest insights and tips' },
      { name: 'Case Studies', href: '#', icon: Users, description: 'Customer success stories' },
      { name: 'Documentation', href: '#', icon: BookOpen, description: 'API and guides' },
      { name: 'Webinars', href: '#', icon: Play, description: 'Live training sessions' }
    ]
  },
  {
    name: 'About',
    href: '#',
    description: 'Our story and mission'
  },
  {
    name: 'Contact',
    href: '#contact',
    description: 'Get in touch with us'
  }
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/web_logo.svg"
              alt="ADmyBRAND AI Suite"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${isScrolled
                        ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                        } text-center font-sans font-medium text-[16px]`}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: 'normal',
                        textAlign: 'center',
                        leadingTrim: 'both',
                        textEdge: 'cap',
                      }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50">
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                          >
                            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mt-0.5">
                              <subItem.icon className="w-4 h-4 text-primary-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 font-linter">{subItem.name}</div>
                              <div className="text-sm text-gray-600">{subItem.description}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${isScrolled
                      ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                      } text-center font-sans font-medium text-[16px]`}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: 'normal',
                      textAlign: 'center',
                      leadingTrim: 'both',
                      textEdge: 'cap',
                    }}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Badge variant="primary" className="bg-green-100 text-green-800 border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
              Free Trial
            </Badge>
            <Button variant="ghost" size="sm" className={
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10 border-white/20'
            }>
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${isScrolled
              ? 'text-gray-700 hover:bg-gray-100'
              : 'text-white hover:bg-white/10'
              }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-50 rounded-xl transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.items?.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                            >
                              <subItem.icon className="w-4 h-4 text-indigo-600" />
                              <span>{subItem.name}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 rounded-xl transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button variant="ghost" size="sm" className="w-full justify-center">
                  Sign In
                </Button>
                <Button variant="primary" size="sm" className="w-full justify-center">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};