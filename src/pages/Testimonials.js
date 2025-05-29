import React, { useState, useEffect } from 'react';
import { Star, Quote, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const TestimonialsPage = () => {
  const [activeTab, setActiveTab] = useState('clients');
  const [visibleCards, setVisibleCards] = useState(new Set());
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [activeTab]);

  const clientTestimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "HR Director",
      feedback: "The Bright Hire helped us hire a developer in 3 days. Highly efficient!",
      rating: 5,
      avatar: "SJ",
      color: "bg-purple-500"
    },
    {
      name: "Michael Chen",
      company: "StartupHub",
      role: "CEO",
      feedback: "Outstanding service! They understood our requirements perfectly and delivered exceptional candidates.",
      rating: 5,
      avatar: "MC",
      color: "bg-blue-500"
    },
    {
      name: "Emma Rodriguez",
      company: "GrowthLab",
      role: "Talent Manager",
      feedback: "Reduced our hiring time by 70%. The quality of candidates was exceptional.",
      rating: 5,
      avatar: "ER",
      color: "bg-green-500"
    }
  ];

  const candidateTestimonials = [
    {
      name: "Alex Thompson",
      role: "Full Stack Developer",
      feedback: "Got placed within a week of submitting my resume. Great service!",
      rating: 5,
      avatar: "AT",
      color: "bg-orange-500",
      journey: "Unemployed → Senior Developer at TechCorp"
    },
    {
      name: "Priya Patel",
      role: "UX Designer",
      feedback: "The team helped me transition from freelancing to a full-time role seamlessly.",
      rating: 5,
      avatar: "PP",
      color: "bg-pink-500",
      journey: "Freelancer → Lead UX Designer"
    },
    {
      name: "David Kim",
      role: "Data Scientist",
      feedback: "They didn't just find me a job, they found me the perfect career opportunity.",
      rating: 5,
      avatar: "DK",
      color: "bg-indigo-500",
      journey: "Junior Analyst → Senior Data Scientist"
    }
  ];

  const successMetrics = [
    { icon: Clock, label: "Average Placement Time", value: "5 Days", color: "text-blue-600" },
    { icon: Users, label: "Successful Placements", value: "2,500+", color: "text-green-600" },
    { icon: TrendingUp, label: "Client Satisfaction", value: "98%", color: "text-purple-600" },
    { icon: CheckCircle, label: "Candidate Retention", value: "94%", color: "text-orange-600" }
  ];

  const beforeAfterExamples = [
    {
      title: "Resume Transformation",
      before: {
        title: "Generic Resume",
        issues: ["No clear value proposition", "Poor formatting", "Missing keywords"],
        score: "45%"
      },
      after: {
        title: "Optimized Resume",
        improvements: ["Clear professional summary", "ATS-friendly format", "Industry-specific keywords"],
        score: "92%"
      }
    },
    {
      title: "Career Growth Journey",
      before: {
        title: "Stagnant Career",
        issues: ["Same role for 3 years", "Limited skill development", "No promotion path"],
        score: "35%"
      },
      after: {
        title: "Accelerated Growth",
        improvements: ["Senior position secured", "40% salary increase", "Leadership responsibilities"],
        score: "95%"
      }
    }
  ];

  const TestimonialCard = ({ testimonial, index, type }) => (
    <div
      data-index={index}
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
        visibleCards.has(String(index)) 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start space-x-4 mb-4">
        <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
          {testimonial.avatar}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
          {type === 'client' ? (
            <>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              {testimonial.journey && (
                <p className="text-sm text-green-600 font-medium">{testimonial.journey}</p>
              )}
            </>
          )}
        </div>
        <div className="flex space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
      
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200" />
        <p className="text-gray-700 italic pl-6">{testimonial.feedback}</p>
      </div>
    </div>
  );

  const MetricCard = ({ icon: Icon, label, value, color, index }) => (
    <div
      className={`bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
        visibleCards.has(`metric-${index}`) 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      }`}
      data-index={`metric-${index}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Icon className={`w-12 h-12 ${color} mx-auto mb-3`} />
      <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );

  const BeforeAfterCard = ({ example, index }) => (
    <div
      data-index={`ba-${index}`}
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform
      }`}
    >
      <div className="bg-gradient-to-r from-red-50 to-green-50 p-6">
        <h3 className="text-xl font-bold text-center text-gray-800 mb-6">{example.title}</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-400">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-red-700">{example.before.title}</h4>
              <span className="text-2xl font-bold text-red-600">{example.before.score}</span>
            </div>
            <ul className="space-y-2">
              {example.before.issues.map((issue, i) => (
                <li key={i} className="text-sm text-red-600 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-400">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-green-700">{example.after.title}</h4>
              <span className="text-2xl font-bold text-green-600">{example.after.score}</span>
            </div>
            <ul className="space-y-2">
              {example.after.improvements.map((improvement, i) => (
                <li key={i} className="text-sm text-green-600 flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Success Stories & Testimonials
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover how The Bright Hire has transformed careers and revolutionized hiring processes
          </p>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <MetricCard key={index} {...metric} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Community Says
          </h2>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('clients')}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'clients'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Client Feedback
              </button>
              <button
                onClick={() => setActiveTab('candidates')}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'candidates'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Candidate Success
              </button>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === 'clients' 
              ? clientTestimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={`client-${index}`} 
                    testimonial={testimonial} 
                    index={index} 
                    type="client"
                  />
                ))
              : candidateTestimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={`candidate-${index}`} 
                    testimonial={testimonial} 
                    index={index} 
                    type="candidate"
                  />
                ))
            }
          </div>
        </div>
      </div>

      {/* Before/After Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Transformation Stories
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            See how we've helped professionals and companies achieve remarkable growth
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {beforeAfterExamples.map((example, index) => (
              <BeforeAfterCard key={index} example={example} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied clients and candidates who've transformed their careers with The Bright Hire
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Find Talent
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transform hover:-translate-y-1 transition-all duration-300">
              Find Your Dream Job
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default TestimonialsPage;