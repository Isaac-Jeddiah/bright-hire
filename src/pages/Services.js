import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Clock, 
  Crown, 
  FileText, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle, 
  Briefcase,
  Zap,
  Target,
  Star,
  TrendingUp
} from 'lucide-react';

const ServicesPage = () => {
  const [visibleCards, setVisibleCards] = useState({});
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // Animate cards in sequence
    const timer = setTimeout(() => {
      servicesData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => ({ ...prev, [index]: true }));
        }, index * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const servicesData = [
    {
      id: 'permanent',
      title: 'Permanent Recruitment',
      shortDesc: 'End-to-end hiring service for full-time roles',
      description: 'Fast, high-quality shortlisting using AI technology to match the perfect candidates with your permanent positions.',
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      features: [
        'AI-powered candidate matching',
        'End-to-end recruitment process',
        'Quality guarantee on placements',
        '24/7 support throughout hiring'
      ],
      stats: { metric: '3-5 days', label: 'Average time to shortlist' }
    },
    {
      id: 'contract',
      title: 'Contract Staffing',
      shortDesc: 'Short-term or project-based hires',
      description: 'Flexible staffing solutions tailored to your project needs with vetted professionals ready to start immediately.',
      icon: <Clock className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      features: [
        'Project-based talent pool',
        'Flexible contract terms',
        'Quick deployment',
        'Scalable team solutions'
      ],
      stats: { metric: '48 hours', label: 'Fastest deployment time' }
    },
    {
      id: 'executive',
      title: 'Executive Search',
      shortDesc: 'CXO, VP, and senior leadership hiring',
      description: 'Specialized executive search focusing on cultural fit and strategic leadership capabilities for C-suite positions.',
      icon: <Crown className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      features: [
        'C-suite and VP level positions',
        'Cultural fit assessment',
        'Leadership competency evaluation',
        'Confidential search process'
      ],
      stats: { metric: '95%', label: 'Executive retention rate' }
    },
    {
      id: 'resume',
      title: 'Resume Services',
      shortDesc: 'Professional resume optimization',
      description: 'Improve candidate resumes to increase shortlisting rates with industry-specific formatting and keyword optimization.',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      features: [
        'ATS-optimized formatting',
        'Industry-specific keywords',
        'Professional writing review',
        'Multiple format versions'
      ],
      stats: { metric: '3x', label: 'Increase in interview calls' }
    },
    {
      id: 'coaching',
      title: 'Interview Preparation & Coaching',
      shortDesc: 'Comprehensive interview training',
      description: 'Free coaching service for candidates placed through our partner coaching program, including mock interviews and feedback.',
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'from-indigo-500 to-indigo-600',
      features: [
        'Mock interview sessions',
        'Behavioral question prep',
        'Technical interview coaching',
        'FREE with partner placements'
      ],
      stats: { metric: '90%', label: 'Interview success rate' }
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(selectedService?.id === service.id ? null : service);
  };

  return (
    <div>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
     

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive recruitment solutions designed to connect exceptional talent with outstanding opportunities
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-blue-600" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-purple-600" />
                <span>Precision Matching</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className={`transform transition-all duration-700 ${
                  visibleCards[index] 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                    selectedService?.id === service.id ? 'ring-2 ring-blue-500 shadow-2xl' : ''
                  }`}
                  onClick={() => handleServiceClick(service)}
                >
                  {/* Card Header */}
                  <div className={`p-6 bg-gradient-to-r ${service.color} text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                    <div className="relative flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{service.stats.metric}</div>
                        <div className="text-xs opacity-90">{service.stats.label}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.shortDesc}</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button className={`flex-1 bg-gradient-to-r ${service.color} text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2`}>
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200">
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Expanded Details */}
                {selectedService?.id === service.id && (
                  <div className="mt-4 bg-white rounded-xl shadow-lg p-6 animate-slide-down border-l-4 border-blue-500">
                    <h4 className="font-bold text-gray-900 mb-3">What's Included:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                        <span>Request This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Efficiency",
                description: "Our advanced algorithms reduce hiring time by 70% while maintaining quality",
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: "Proven Track Record",
                description: "Over 1000+ successful placements with 95% client satisfaction rate",
                icon: <Target className="w-8 h-8" />
              },
              {
                title: "End-to-End Support",
                description: "From job posting to onboarding, we handle every step of the process",
                icon: <CheckCircle className="w-8 h-8" />
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-white mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Hiring?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our services can solve your specific recruitment challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      

    </div>
    </div>
  );
};

export default ServicesPage;