import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="About Us" />

                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>Welcome to ASDSR Hospitals, where we are dedicated to providing the highest quality healthcare services. Our hospital is equipped with state-of-the-art facilities and a team of experienced medical professionals committed to your well-being.</p>

                    <b className='text-gray-800'>Our Mission</b>

                    <p>Our mission is to deliver compassionate care and ensure the best possible outcomes for our patients. We offer a wide range of medical services, including emergency care, surgery, maternity, and specialized treatments.</p>

                    <p>At ASDSR Hospitals, we believe in a patient-centered approach, where your health and comfort are our top priorities. Thank you for choosing us for your healthcare needs.</p>
                </div>
            </div>

            <div className='text-xl my-4'>
                <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
            </div>

            <div className='flex flex-col md:flex-row gap-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>Efficiency:</b>
                    <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                </div>

                <div className='border px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>Convenience:</b>
                    <p>Access to trusted healthcare professionals in your area.</p>
                </div>

                <div className='border px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>Personalization:</b>
                    <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
