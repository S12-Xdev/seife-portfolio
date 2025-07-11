import React from 'react'
import { FaCode, FaServer, FaMobileAlt, FaSearch, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const services = [
    {
        title: "Full Stack Development",
        role: "CEO & Web Developer",
        icon: <FaCode className="text-4xl text-blue-600 dark:text-blue-400" />,
        description: "Comprehensive web application development using MERN stack (MongoDB, Express.js, React, Node.js). From concept to deployment, I build responsive, secure, and scalable web solutions.",
    },
    {
        title: "API Development",
        role: "CTO",
        icon: <FaServer className="text-4xl text-green-600 dark:text-green-400" />,
        description: "RESTful and GraphQL API design and implementation with proper authentication, documentation, and performance optimization for seamless frontend-backend integration.",
    },
    {
        title: "Responsive Web Design",
        role: "Senior Front-end Developer",
        icon: <FaMobileAlt className="text-4xl text-pink-600 dark:text-pink-400" />,
        description: "Creating websites that work perfectly on all devices using modern CSS frameworks and techniques like Flexbox, Grid, and responsive design principles.",
    },
    {
        title: "Code Review & Optimization",
        role: "Marketing & Sale",
        icon: <FaSearch className="text-4xl text-yellow-600 dark:text-yellow-400" />,
        description: "Comprehensive code audits to improve performance, security, and maintainability. I identify bottlenecks and provide actionable recommendations for improvement.",
    },
];

const Service = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-32 max-w-screen-xl  ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Technical Proficiencies</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                        What I do best in the world of web development.
                    </p>
                </div>

                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex items-start bg-gray-50 rounded-lg shadow-xl p-5 dark:bg-gray-900 dark:border-gray-700 transition-transform duration-300 hover:scale-105"
                        >
                            {/* Left Icon */}
                            <div className="mr-4">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">{service.title}</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">{service.role}</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                    {service.description}
                                </p>
                            </div>

                            {/* Right Social Icons */}
                            <div className="ml-4 flex flex-col space-y-2">
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><FaGithub /></a><br />
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><FaTwitter /></a><br />
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><FaLinkedin /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
