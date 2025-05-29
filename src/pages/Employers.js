import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  ArrowRight, 
  Briefcase, 
  Users, 
  Zap, 
  Building, 
  MapPin, 
  DollarSign, 
  Calendar, 
  Phone, 
  Send,
  Star,
  Quote,
  TrendingUp,
  Award,
  Target
} from 'lucide-react';

const EmployersPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    jobRole: '',
    description: '',
    location: '',
    salaryRange: '',
    joinDate: '',
    contactDetails: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const sections = ['hero', 'benefits', 'process', 'form', 'testimonial'];
    sections.forEach((section, index) => {
      setTimeout(() => {
        setVisibleSections(prev => ({ ...prev, [section]: true }));
      }, index * 300);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.companyName || !formData.jobRole || !formData.description || 
        !formData.location || !formData.salaryRange || !formData.joinDate || !formData.contactDetails) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        companyName: '',
        jobRole: '',
        description: '',
        location: '',
        salaryRange: '',
        joinDate: '',
        contactDetails: ''
      });
    }, 3000);
  };

  const processSteps = [
    { icon: <Send className="w-6 h-6" />, title: "Submit Job", desc: "Post your requirements" },
    { icon: <Users className="w-6 h-6" />, title: "Get Shortlist", desc: "AI-curated candidates" },
    { icon: <Target className="w-6 h-6" />, title: "Interviews", desc: "Meet top talent" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Hire", desc: "Welcome new team member" }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Pre-screened, trained talent",
      description: "Every candidate goes through rigorous screening and skill assessment",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Fast response (48 hours)",
      description: "Get your first batch of qualified candidates within 2 business days",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "First hire trial (optional)",
      description: "Risk-free trial period to ensure the perfect fit for your team",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      

      {/* Hero Section */}
      <section className={`relative py-20 overflow-hidden transition-all duration-1000 ${
        visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hire <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Smarter</span>,
              <br />Not Harder
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with pre-screened, job-ready talent through our AI-powered recruitment platform. 
              Make your next great hire in just 48 hours.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Pre-Screened</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span>High Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className={`py-20 transition-all duration-1000 delay-300 ${
        visibleSections.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've streamlined the hiring process to save you time while ensuring you get the best talent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Overview */}
      <section className={`py-20 bg-white transition-all duration-1000 delay-600 ${
        visibleSections.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Hiring Process</h2>
            <p className="text-xl text-gray-600">Simple, efficient, and designed for results</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0">
                <div className={`w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 transform hover:scale-110 transition-all duration-300 ${
                  currentStep >= index ? 'animate-pulse' : ''
                }`}>
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
                
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-gray-400 mt-4 absolute translate-x-24" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Requirement Form */}
      <section className={`py-20 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 delay-900 ${
        visibleSections.form ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Post Your Job Requirements</h2>
            <p className="text-xl text-gray-600">Tell us what you're looking for, and we'll find the perfect candidates</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {submitSuccess ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Job Posted Successfully!</h3>
                <p className="text-gray-600 mb-6">We'll get back to you with qualified candidates within 48 hours.</p>
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Response within 48 hours</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>Pre-screened candidates</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <Building className="w-4 h-4 mr-2 text-blue-600" />
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <Briefcase className="w-4 h-4 mr-2 text-purple-600" />
                      Job Role *
                    </label>
                    <input
                      type="text"
                      name="jobRole"
                      value={formData.jobRole}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="e.g. Senior Software Engineer"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Users className="w-4 h-4 mr-2 text-indigo-600" />
                    Job Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-none"
                    placeholder="Describe the role, responsibilities, and requirements..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 mr-2 text-green-600" />
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="e.g. Remote, New York, Hybrid"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <DollarSign className="w-4 h-4 mr-2 text-yellow-600" />
                      Salary Range *
                    </label>
                    <input
                      type="text"
                      name="salaryRange"
                      value={formData.salaryRange}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="e.g. $80k - $120k"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 mr-2 text-orange-600" />
                      Preferred Join Date *
                    </label>
                    <input
                      type="date"
                      name="joinDate"
                      value={formData.joinDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="w-4 h-4 mr-2 text-red-600" />
                      Contact Details *
                    </label>
                    <input
                      type="text"
                      name="contactDetails"
                      value={formData.contactDetails}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                      placeholder="Email or phone number"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:shadow-lg transform hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting Job...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Job Requirements</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    * All fields are required. We'll respond within 48 hours.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className={`py-20 bg-white transition-all duration-1000 delay-1200 ${
        visibleSections.testimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 rounded-2xl shadow-xl relative">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-blue-600 opacity-20" />
            <div className="relative">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8 italic">
                "The Bright Hire transformed our hiring process completely. We needed a senior developer urgently, 
                and they delivered 5 qualified candidates within 2 days. The quality was exceptional - we hired 
                our first choice, and they've been with us for over a year now. Best recruitment experience we've ever had!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JS
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900 text-lg">Jessica Smith</p>
                  <p className="text-gray-600">CTO, TechVenture Inc.</p>
                  <p className="text-sm text-gray-500">Fortune 500 Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">The Bright Hire</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 The Bright Hire. All rights reserved.</p>
              <p className="mt-1">Smart Hiring. Bright Futures.</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default EmployersPage;