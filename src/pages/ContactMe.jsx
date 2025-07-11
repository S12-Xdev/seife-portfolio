import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import profilepic from '../assets/images/MyProfile.png'; // Replace with your actual profile image path

const ContactMe = () => {
    return (
        <section id="contact" className="bg-white dark:bg-gray-900">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Contact Me</h2>
                <p className="text-gray-600 dark:text-gray-400 text-3xl">Have a project or question? I’d love to hear from you.</p>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">

                {/* LEFT CARD */}
                <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-xl">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={profilepic}
                            alt="Profile"
                            className="w-24 h-24 rounded-full mb-4 border-b-cyan-900 shadow-md"
                        />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-5">Seifu Tadesse</h2>
                        <p className="text-blue-600 dark:text-blue-400 mb-4 text-2xl">Senior Lecturer & Full Stack Developer</p>

                        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-4">
                            <p className="flex items-center gap-2 justify-center text-lg"><FaEnvelope className="text-blue-500" />seifu_tadesse@mkau.edu.et</p>
                            <p className="flex items-center gap-2 justify-center text-lg"><FaPhone className="text-green-500" /> +251-924-92-18-28</p>
                            <p className="flex items-center gap-2 justify-center text-lg"><FaMapMarkerAlt className="text-red-500" /> Ethiopia</p>
                        </div>

                        <div className="flex gap-4 mt-6">
                            <a href="https://www.linkedin.com/in/seifu-tadesse-718b71270/" target="_blank" rel="noreferrer">
                                <FaLinkedin className="text-blue-300 hover:scale-110 transition-transform" size={22} />
                            </a>
                            <a href="https://github.com/S12-Xdev" target="_blank" rel="noreferrer">
                                <FaGithub className="text-shadow-blue-950 dark:text-white hover:scale-110 transition-transform" size={22} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="w-full md:w-1/2 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Me</h2>
                    <form className="space-y-6">

                        {/* NAME FIELDS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    required
                                    className="peer w-full border-b-2 bg-transparent text-sm text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 py-3 placeholder-transparent"
                                    placeholder="First Name"
                                />
                                <label
                                    htmlFor="first_name"
                                    className="absolute left-0 top-3 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
                                >
                                    First Name
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    required
                                    className="peer w-full border-b-2 bg-transparent text-sm text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 py-3 placeholder-transparent"
                                    placeholder="Last Name"
                                />
                                <label
                                    htmlFor="last_name"
                                    className="absolute left-0 top-3 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
                                >
                                    Last Name
                                </label>
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="peer w-full border-b-2 bg-transparent text-sm text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 py-3 placeholder-transparent"
                                placeholder="Email Address"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 top-3 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
                            >
                                Email Address
                            </label>
                        </div>

                        {/* MESSAGE */}
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="peer w-full border-b-2 bg-transparent text-sm text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 py-3 resize-none placeholder-transparent"
                                placeholder="Your Message"
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute left-0 top-3 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
                            >
                                Your Message
                            </label>
                        </div>

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            className="w-full bg-blue-950 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
