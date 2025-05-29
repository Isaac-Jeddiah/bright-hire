import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <section className="bg-blue-500 text-white text-center py-20">
                    <h1 className="text-4xl font-bold">Smart Hiring. Bright Futures.</h1>
                    <p className="mt-4">AI-enabled recruitment services connecting companies with top-tier, job-ready talent.</p>
                    <div className="mt-6">
                        <Button label="Post a Job" />
                        <Button label="Submit Your Resume" />
                    </div>
                </section>

                <section className="py-10 px-5">
                    <h2 className="text-3xl font-semibold text-center">Quick Introduction</h2>
                    <p className="mt-4 text-center">The Bright Hire is dedicated to connecting employers with the best talent through innovative recruitment solutions.</p>
                </section>

                <section className="py-10 px-5">
                    <h2 className="text-3xl font-semibold text-center">Key Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <Card title="Fast, AI-powered shortlisting" />
                        <Card title="Trained candidates from coaching partners" />
                        <Card title="Industry-specialized recruiters" />
                    </div>
                </section>

                <section className="py-10 px-5">
                    <h2 className="text-3xl font-semibold text-center">Popular Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <Card title="Permanent Hiring" />
                        <Card title="Executive Search" />
                        <Card title="Resume Services" />
                    </div>
                </section>

                <section className="py-10 px-5">
                    <h2 className="text-3xl font-semibold text-center">Testimonials</h2>
                    <div className="mt-6">
                        <p className="text-center">"The Bright Hire helped us hire a developer in 3 days. Highly efficient!"</p>
                        <p className="text-center">"Got placed within a week of submitting my resume."</p>
                    </div>
                </section>

                <section className="bg-gray-200 text-center py-10">
                    <h2 className="text-3xl font-semibold">Looking to hire? Book a free consultation.</h2>
                    <h2 className="text-3xl font-semibold">Searching for a job? Submit your resume now.</h2>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;