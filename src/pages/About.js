import React, { useState, useEffect } from 'react';
import { Heart, Target, Users, Award, Lightbulb, Shield, Star, ArrowRight, Quote, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate values
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const founderStory = {
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    bio: "With over 15 years in talent acquisition, Sarah founded The Bright Hire after witnessing countless mismatches between talented individuals and great companies. Her vision: create a recruitment process that's both human-centered and technology-enhanced.",
    avatar: "SM",
    journey: [
      { year: "2008", milestone: "Started in traditional recruiting" },
      { year: "2015", milestone: "Led talent acquisition at Fortune 500" },
      { year: "2020", milestone: "Founded The Bright Hire" },
      { year: "2024", milestone: "Placed 2,500+ professionals" }
    ]
  };

  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Head of Technology",
      bio: "Former Google engineer who builds the AI systems that power our matching algorithms.",
      avatar: "AR",
      color: "bg-blue-500"
    },
    {
      name: "Emily Chen",
      role: "Senior Talent Partner",
      bio: "Specializes in tech recruitment with a focus on diversity and inclusion.",
      avatar: "EC",
      color: "bg-purple-500"
    },
    {
      name: "Michael Thompson",
      role: "Client Success Manager",
      bio: "Ensures every client experience exceeds expectations with personalized service.",
      avatar: "MT",
      color: "bg-green-500"
    }
  ];

  const coreValues = [
    {
      icon: Award,
      title: "Quality Over Quantity",
      description: "We focus on finding the perfect match rather than flooding you with resumes. Every candidate is carefully vetted and aligned with your specific needs.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Heart,
      title: "People-First Hiring",
      description: "Behind every resume is a person with dreams and ambitions. We treat every candidate with respect and every client as a partner in growth.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Shield,
      title: "Ethical Recruiting",
      description: "Transparency, honesty, and integrity guide every interaction. We believe great relationships are built on trust and mutual respect.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  const differentiators = [
    {
      title: "AI-Enhanced Matching",
      description: "Our proprietary algorithm doesn't just match keywords—it understands culture fit and career trajectory."
    },
    {
      title: "3-Day Guarantee",
      description: "We're so confident in our process, we guarantee quality candidates within 3 days or you don't pay."
    },
    {
      title: "Lifetime Support",
      description: "Our relationship doesn't end with placement. We provide ongoing support for career growth and team development."
    },
    {
      title: "Transparent Process",
      description: "Real-time updates, clear communication, and no hidden fees. You always know where you stand."
    }
  ];

  const missionStats = [
    { number: "2,500+", label: "Lives Changed" },
    { number: "500+", label: "Companies Served" },
    { number: "98%", label: "Success Rate" },
    { number: "3", label: "Day Average Placement" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              The Story Behind 
              <span className="block text-yellow-300">The Bright Hire</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Where technology meets humanity in the art of perfect matches
            </p>
            <div className="flex justify-center space-x-8 text-center">
              {missionStats.map((stat, index) => (
                <div key={index} className="animate-slide-up" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="text-3xl font-bold text-yellow-300">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div 
        className="py-20 bg-white"
        data-section="story"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${
              visibleSections.has('story') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-200" />
                    <p className="text-lg text-gray-700 leading-relaxed pl-8">
                      "I started The Bright Hire because I was tired of seeing brilliant people 
                      stuck in the wrong roles and amazing companies struggling to find the right talent. 
                      There had to be a better way."
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Why We Started</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span className="text-gray-700">Traditional recruiting felt impersonal and inefficient</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span className="text-gray-700">Great candidates were being overlooked by outdated systems</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span className="text-gray-700">Companies needed a partner, not just a vendor</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Target className="w-8 h-8 text-yellow-300 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-2">Mission</h4>
                          <p className="opacity-90">To revolutionize recruitment by combining cutting-edge technology with genuine human connection.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Lightbulb className="w-8 h-8 text-yellow-300 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-2">Vision</h4>
                          <p className="opacity-90">A world where every professional finds their perfect role and every company builds their dream team.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We're Different */}
      <div 
        className="py-20 bg-gray-50"
        data-section="different"
      >
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${
            visibleSections.has('different') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">How We're Different</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not your typical consultancy. Here's what sets us apart from the crowd.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div 
        className="py-20 bg-white"
        data-section="founder"
      >
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${
            visibleSections.has('founder') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Founder</h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl font-bold">
                        {founderStory.avatar}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{founderStory.name}</h3>
                        <p className="text-purple-200">{founderStory.role}</p>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed opacity-90">
                      {founderStory.bio}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">The Journey</h3>
                  {founderStory.journey.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                        {item.year}
                      </div>
                      <div className="flex-1 bg-white p-4 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        <p className="text-gray-700 font-medium">{item.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div 
        className="py-20 bg-gray-50"
        data-section="team"
      >
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${
            visibleSections.has('team') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the dedicated professionals who make the magic happen every day.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <div className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}>
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div 
        className="py-20 bg-white"
        data-section="values"
      >
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${
            visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide every decision we make and every relationship we build.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {coreValues.map((value, index) => (
                <div 
                  key={index}
                  className={`mb-12 transition-all duration-1000 ${
                    activeValue === index ? 'scale-105' : 'scale-100'
                  }`}
                >
                  <div className={`${value.bgColor} rounded-3xl p-8 border-2 ${
                    activeValue === index ? 'border-current shadow-2xl' : 'border-transparent shadow-lg'
                  } transition-all duration-500`}>
                    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                      <div className={`w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg`}>
                        <value.icon className={`w-12 h-12 ${value.color}`} />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join the hundreds of companies and thousands of professionals who've discovered 
            what makes The Bright Hire truly special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Partner With Us
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300">
              Join Our Network
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;