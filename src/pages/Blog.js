import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, ArrowRight, Search, Tag, TrendingUp, FileText, Briefcase, Star, Eye, MessageSquare, Share2 } from 'lucide-react';

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [featuredPost, setFeaturedPost] = useState(0);

  const categories = [
    { id: 'all', name: 'All Posts', icon: FileText },
    { id: 'hiring-trends', name: 'Hiring Trends', icon: TrendingUp },
    { id: 'resume-tips', name: 'Resume Tips', icon: FileText },
    { id: 'job-search', name: 'Job Search Hacks', icon: Briefcase },
    { id: 'career-advice', name: 'Career Advice', icon: Star }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "2025 Hiring Trends: What Every Job Seeker Should Know",
      excerpt: "The job market is evolving rapidly. Discover the top 10 trends shaping recruitment in 2025 and how to position yourself for success.",
      content: "Remote work isn't just a trend anymore—it's the new standard. Companies are embracing hybrid models, AI-assisted hiring is becoming mainstream, and soft skills are more valuable than ever. Here's what you need to know...",
      category: 'hiring-trends',
      author: 'Sarah Mitchell',
      date: '2025-01-15',
      readTime: '8 min',
      image: '/api/placeholder/600/300',
      tags: ['Remote Work', '2025 Trends', 'Future of Work'],
      views: 2847,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: "The Perfect Resume Formula: 7 Elements That Get You Hired",
      excerpt: "Your resume has 6 seconds to make an impression. Learn the exact formula our recruiters use to identify top candidates.",
      content: "After reviewing over 10,000 resumes, we've identified 7 key elements that separate successful candidates from the rest. It's not just about experience—it's about presentation, keywords, and storytelling...",
      category: 'resume-tips',
      author: 'Emily Chen',
      date: '2025-01-10',
      readTime: '12 min',
      image: '/api/placeholder/600/300',
      tags: ['Resume Writing', 'ATS Optimization', 'Career Tips'],
      views: 3521,
      comments: 45,
      featured: false
    },
    {
      id: 3,
      title: "Hidden Job Market: How to Find Jobs That Aren't Posted",
      excerpt: "80% of jobs are never advertised. Discover the secret strategies to tap into the hidden job market and land your dream role.",
      content: "The best opportunities often come through networking, direct outreach, and strategic relationship building. Here's your step-by-step guide to accessing the hidden job market...",
      category: 'job-search',
      author: 'Alex Rodriguez',
      date: '2025-01-08',
      readTime: '10 min',
      image: '/api/placeholder/600/300',
      tags: ['Networking', 'Hidden Jobs', 'Job Search Strategy'],
      views: 1892,
      comments: 31,
      featured: false
    },
    {
      id: 4,
      title: "AI in Recruitment: How to Beat the Algorithms",
      excerpt: "ATS systems filter 98% of resumes. Learn how to optimize yours to pass AI screening and reach human recruiters.",
      content: "Applicant Tracking Systems use complex algorithms to screen resumes. Understanding how they work is crucial for job search success. Here are the insider secrets...",
      category: 'hiring-trends',
      author: 'Michael Thompson',
      date: '2025-01-05',
      readTime: '15 min',
      image: '/api/placeholder/600/300',
      tags: ['ATS', 'AI Recruitment', 'Resume Optimization'],
      views: 4156,
      comments: 67,
      featured: true
    },
    {
      id: 5,
      title: "Salary Negotiation: The 5-Step Framework to Get Paid What You're Worth",
      excerpt: "Most professionals leave $5,000+ on the table by not negotiating. Master this proven framework to maximize your earning potential.",
      content: "Salary negotiation isn't just about asking for more money—it's about demonstrating value, timing your approach, and using psychological principles to your advantage...",
      category: 'career-advice',
      author: 'Sarah Mitchell',
      date: '2025-01-03',
      readTime: '14 min',
      image: '/api/placeholder/600/300',
      tags: ['Salary Negotiation', 'Career Growth', 'Professional Development'],
      views: 2743,
      comments: 38,
      featured: false
    },
    {
      id: 6,
      title: "Remote Interview Mastery: 10 Tips to Shine on Video Calls",
      excerpt: "Remote interviews require different skills than in-person meetings. Master these techniques to make a lasting impression.",
      content: "Video interviews are here to stay. From technical setup to body language, lighting to follow-up strategies—here's everything you need to ace your next remote interview...",
      category: 'job-search',
      author: 'Emily Chen',
      date: '2025-01-01',
      readTime: '9 min',
      image: '/api/placeholder/600/300',
      tags: ['Remote Interviews', 'Video Calls', 'Interview Tips'],
      views: 1654,
      comments: 22,
      featured: false
    },
    {
      id: 7,
      title: "LinkedIn Hacks: Turn Your Profile into a Job Magnet",
      excerpt: "Your LinkedIn profile is your digital business card. These 12 optimization strategies will have recruiters reaching out to you.",
      content: "LinkedIn isn't just a resume repository—it's a powerful networking and job search tool. These advanced strategies will transform your profile into a recruiter magnet...",
      category: 'job-search',
      author: 'Alex Rodriguez',
      date: '2024-12-28',
      readTime: '11 min',
      image: '/api/placeholder/600/300',
      tags: ['LinkedIn', 'Personal Branding', 'Professional Networking'],
      views: 3287,
      comments: 54,
      featured: false
    },
    {
      id: 8,
      title: "Skills Gap Analysis: What Employers Really Want in 2025",
      excerpt: "The skills employers value most are changing rapidly. Identify gaps in your skillset and create a learning roadmap.",
      content: "Technical skills get you in the door, but soft skills get you promoted. Here's our comprehensive analysis of the most in-demand skills for 2025...",
      category: 'career-advice',
      author: 'Michael Thompson',
      date: '2024-12-25',
      readTime: '13 min',
      image: '/api/placeholder/600/300',
      tags: ['Skills Development', 'Career Planning', 'Professional Growth'],
      views: 2156,
      comments: 29,
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Auto-rotate featured posts
  useEffect(() => {
    const featuredPosts = blogPosts.filter(post => post.featured);
    const interval = setInterval(() => {
      setFeaturedPost(prev => (prev + 1) % featuredPosts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const currentFeatured = featuredPosts[featuredPost];

  const BlogCard = ({ post, isLarge = false }) => (
    <article className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
      isLarge ? 'col-span-2 row-span-2' : ''
    }`}>
      <div className={`bg-gradient-to-r from-blue-500 to-purple-500 ${isLarge ? 'h-64' : 'h-48'} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-medium">
              {categories.find(cat => cat.id === post.category)?.name}
            </span>
            {post.featured && (
              <span className="bg-yellow-500 px-3 py-1 rounded-full text-xs font-medium text-black">
                Featured
              </span>
            )}
          </div>
          <h3 className={`font-bold leading-tight ${isLarge ? 'text-2xl' : 'text-lg'}`}>
            {post.title}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className={`text-gray-600 mb-4 ${isLarge ? 'text-base' : 'text-sm'}`}>
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, isLarge ? 3 : 2).map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{post.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageSquare className="w-4 h-4" />
              <span>{post.comments}</span>
            </div>
          </div>
        </div>

        <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
          <span>Read Full Article</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Career Insights & Hiring Trends
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Expert advice, industry insights, and actionable tips to accelerate your career
            </p>
            
            {/* Featured Post Preview */}
            {currentFeatured && (
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span className="text-yellow-300 font-semibold">Featured Article</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">{currentFeatured.title}</h2>
                <p className="opacity-90 mb-4">{currentFeatured.excerpt}</p>
                <div className="flex items-center justify-center space-x-6 text-sm">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{currentFeatured.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{currentFeatured.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{currentFeatured.readTime}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, tips, and insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:outline-none text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(category => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(0, visiblePosts).map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                isLarge={index === 0 && visiblePosts === 6}
              />
            ))}
          </div>

          {/* Load More Button */}
          {visiblePosts < filteredPosts.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisiblePosts(prev => prev + 6)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Ahead of the Curve</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get the latest career insights, hiring trends, and job search tips delivered to your inbox weekly.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button className="bg-yellow-500 text-purple-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 10,000+ professionals who trust our insights. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Popular Topics */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(category => (
              <div key={category.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <category.icon className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Explore our articles, tips, and resources on {category.name.toLowerCase()}.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  View Articles
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogSection;