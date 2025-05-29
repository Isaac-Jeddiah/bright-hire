import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="mb-4">
                The Bright Hire was founded with the mission to connect skilled professionals with top-tier job opportunities. Our vision is to revolutionize the recruitment process through AI-enabled services that prioritize quality and efficiency.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
            <p className="mb-4">
                We started The Bright Hire to address the challenges faced by both employers and candidates in the hiring process. Our approach is centered around understanding the unique needs of our clients and providing tailored solutions that drive results.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Quality over quantity</li>
                <li>People-first hiring</li>
                <li>Ethical recruiting</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Meet Our Team</h2>
            <p>
                Our team consists of experienced recruiters and industry specialists who are dedicated to helping you find the right talent or job. We believe in building lasting relationships and providing exceptional service to our clients and candidates alike.
            </p>
        </div>
    );
};

export default About;