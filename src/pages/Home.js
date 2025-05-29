import React from 'react';
import { CheckCircle, Users, Search, FileText, Star, ArrowRight, Briefcase, UserCheck, Zap } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 opacity-90"></div>
       
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Smart Hiring.
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Bright Futures.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-enabled recruitment services connecting companies with top-tier, job-ready talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center space-x-2">
                <Briefcase className="w-5 h-5" />
                <span>Post a Job</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Submit Your Resume</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full animate-bounce delay-2000"></div>
      </section>

      {/* Quick Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Transforming Recruitment</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            The Bright Hire revolutionizes talent acquisition through cutting-edge AI technology and personalized coaching partnerships. 
            We bridge the gap between exceptional companies and outstanding professionals, creating success stories one placement at a time.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose The Bright Hire?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-blue-600" />,
                title: "Fast, AI-powered shortlisting",
                description: "Our advanced algorithms match candidates 10x faster than traditional methods"
              },
              {
                icon: <UserCheck className="w-8 h-8 text-purple-600" />,
                title: "Trained candidates from coaching partners",
                description: "Access pre-vetted talent who've completed specialized training programs"
              },
              {
                icon: <Users className="w-8 h-8 text-indigo-600" />,
                title: "Industry-specialized recruiters",
                description: "Expert recruiters with deep knowledge in your specific industry vertical"
              }
            ].map((benefit, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-500 ml-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Popular Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-12 h-12 text-blue-600" />,
                title: "Permanent Hiring",
                description: "Full-time positions across all industries and experience levels",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Search className="w-12 h-12 text-purple-600" />,
                title: "Executive Search",
                description: "C-suite and senior leadership recruitment for strategic roles",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <FileText className="w-12 h-12 text-indigo-600" />,
                title: "Resume Services",
                description: "Professional resume writing and career coaching services",
                color: "from-indigo-500 to-indigo-600"
              }
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-gray-500 font-semibold mb-8">Trusted by Leading Companies</h3>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {['TechCorp', 'InnovateCo', 'FutureWorks', 'NextGen'].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "The Bright Hire helped us hire a developer in 3 days. Their AI-powered matching is incredibly efficient!",
                name: "Sarah Chen",
                role: "CTO, TechStartup",
                avatar: "SC"
              },
              {
                quote: "Got placed within a week of submitting my resume. The coaching partnership made all the difference.",
                name: "Michael Rodriguez",
                role: "Software Engineer",
                avatar: "MR"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
     
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">Ready to Get Started?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white backdrop-blur-md p-8 rounded-2xl border border-black/20">
              <h3 className="text-2xl font-bold text-blue mb-4">Looking to hire?</h3>
              <p className="text-blue-200 mb-6">Book a free consultation and discover how we can transform your recruitment process.</p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Book Free Consultation
              </button>
            </div>
            <div className="bg-white backdrop-blur-md p-8 rounded-2xl border border-black/20">
              <h3 className="text-2xl font-bold text-black mb-4">Searching for a job?</h3>
              <p className="text-blue-200 mb-6">Submit your resume and let our AI connect you with your dream opportunity.</p>
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:from-yellow-300 hover:to-orange-300 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Submit Resume Now
              </button>
            </div>
          </div>
        </div>
      

      </div>
    </div>

  );
};

export default HomePage;