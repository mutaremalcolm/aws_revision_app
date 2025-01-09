'use client';

import Image from "next/image";

const certifications = [
    {
        id: 1,
        title: 'AWS Cloud Practitioner',
        description: 'Test your knowledge with comprehensive multiple-choice quizzes and prepare for your AWS Cloud Practitioner certification.',
        badge: '/cppicon.png',
        link: '/cloud-practitioner',
        disabled: false, 
    },
    {
        id: 2,
        title: 'AWS SysOps Adminstrator - Associate',
        description: 'Test your knowledge with comprehensive multiple-choice quizzes and prepare for your AWS SysOps Administartor certification.',
        badge: '/sysopas.png',
        link: '/sysops-administrator-associate',
        disabled: false,
    },
];

export default function Hero() {
    return (
        <section className='py-10'>
            <div className='container mx-auto text-center px-4'>
                {certifications.map((cert) => (
                    <div key={cert.id} className='mb-10'>
                        <Image
                            src={cert.badge}
                            alt={`${cert.title} Badge`}
                            width={100}
                            height={100}
                            className='mx-auto mb-4'
                        />
                        <h1 className='text-4xl font-bold mb-4'>{cert.title}</h1>
                        <p className='text-xl mb-8'>{cert.description}</p> 
                        <a
                            href={cert.disabled ? '#' : cert.link}
                            className={`px-6 py-3 rounded text-white ${
                                cert.disabled
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                            aria-disabled={cert.disabled}
                            >
                                {cert.disabled ? 'Coming Soon' : `Start`}
                            </a>
                            {cert.id !== certifications.length && <hr className='my-12 border-gray-300' />}
                        </div>
                ))}
            </div>
        </section>
    );
}