import React from 'react';
import { useForm } from 'react-hook-form';

const Employers = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic here
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">For Employers</h1>
            <p className="mb-4">
                We make hiring easy and efficient. Our pre-screened, trained talent is ready to meet your needs.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Why Work With Us?</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Pre-screened, trained talent</li>
                <li>Fast response (48 hours)</li>
                <li>First hire trial (optional)</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Hiring Process Overview</h2>
            <p className="mb-4">Submit Job → Get Shortlist → Interviews → Hire</p>
            <h2 className="text-2xl font-semibold mb-2">Job Requirement Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <div className="mb-4">
                    <label className="block mb-2">Company Name</label>
                    <input type="text" {...register('companyName')} className="border p-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Job Role</label>
                    <input type="text" {...register('jobRole')} className="border p-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Description</label>
                    <textarea {...register('description')} className="border p-2 w-full" required></textarea>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Location</label>
                    <input type="text" {...register('location')} className="border p-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Salary Range</label>
                    <input type="text" {...register('salaryRange')} className="border p-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Preferred Join Date</label>
                    <input type="date" {...register('joinDate')} className="border p-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Contact Details</label>
                    <input type="text" {...register('contactDetails')} className="border p-2 w-full" required />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Job</button>
            </form>
        </div>
    );
};

export default Employers;