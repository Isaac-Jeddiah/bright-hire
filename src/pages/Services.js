import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const servicesData = [
    {
        title: 'Permanent Recruitment',
        description: 'End-to-end hiring service for full-time roles. Fast, high-quality shortlisting using AI.',
    },
    {
        title: 'Contract Staffing',
        description: 'Short-term or project-based hires tailored to your needs.',
    },
    {
        title: 'Executive Search',
        description: 'CXO, VP, and senior leadership hiring with a focus on cultural fit.',
    },
    {
        title: 'Resume Services',
        description: 'Improve candidate resumes to increase shortlisting rates.',
    },
    {
        title: 'Interview Preparation & Coaching',
        description: 'Free if placed through our partner coaching program.',
    },
];

const Services = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.map((service, index) => (
                    <Card key={index} title={service.title} description={service.description}>
                        <Button label="Get Started" />
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Services;