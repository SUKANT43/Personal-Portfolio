import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const experiences = [
    {
        company: 'Secondary School',
        period: '2020',
        description: 'Literacy Mission Matriculation Higher Secondary School',
    },
    {
        company: 'Higher Secondary School',
        period: '2022',
        description: 'RKR Higher Secondary School',
    },
    {
        company: 'Bachelor of Engineering',
        period: '2025 - Present',
        description: 'Bannari Amman Institute of Technology',
    },
];

const Experience = () => {
    return (
        <div className='p-8 max-w-[600px] mx-auto'>
            <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Studies</h1>
            <motion.div
                className='space-y-8'
                initial="hidden"
                animate="visible"
            >
                {experiences.map((experience, index) => (
                    <Reveal key={index}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1 }}
                            className='border border-purple-600 p-6 rounded-lg shadow-md
                            hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                        >
                            <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                            <p className='text-gray-300'>{experience.period}</p>
                            <p className='text-gray-400 mt-4'>{experience.description}</p>
                        </motion.div>
                    </Reveal>
                ))}
            </motion.div>
        </div>
    );
};

export default Experience;
