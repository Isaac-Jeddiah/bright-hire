import React from 'react';
import Card from '../components/common/Card';

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            feedback: "The Bright Hire helped us hire a developer in just 3 days. Highly efficient!",
            photo: "path/to/photo1.jpg"
        },
        {
            name: "Jane Smith",
            feedback: "I got placed within a week of submitting my resume. Great service!",
            photo: "path/to/photo2.jpg"
        },
        // Add more testimonials as needed
    ];

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Testimonials</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="p-4 border rounded shadow">
                        <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
                        <h2 className="font-semibold">{testimonial.name}</h2>
                        <p className="text-gray-600">{testimonial.feedback}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;