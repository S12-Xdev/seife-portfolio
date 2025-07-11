import React, { useState } from 'react';
import { FaUserTie, FaGraduationCap, FaTools, FaCode, FaDatabase, FaServer } from 'react-icons/fa';
import { MdOutlineWeb } from 'react-icons/md';
import { HiDatabase } from 'react-icons/hi'

const tabs = [
    {
        id: 'skills',
        label: 'Skills',
        icon: <FaTools className="text-cyan-300 mr-2" />,
        content: (
            <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300">
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><MdOutlineWeb className="mr-2 text-green-600" />Frontend Development</h4>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center"><FaCode className="mr-2 text-blue-500" />React.js</div>
                        <div className="flex items-center"><FaCode className="mr-2 text-blue-500" />Redux & Context API</div>
                        <div className="flex items-center"><FaCode className="mr-2 text-blue-500" />TypeScript</div>
                        <div className="flex items-center"><FaCode className="mr-2 text-blue-500" />HTML5, CSS3 / SASS</div>
                        <div className="flex items-center"><FaCode className="mr-2 text-blue-500" />Responsive Design</div>
                        <div className="flex items-center"><FaCode className="mr-2 text-blue-500" />Tailwind CSS</div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><FaServer className="mr-2 text-purple-600" />Backend Development</h4>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center"><FaCode className="mr-2 text-purple-500" />Node.js & Express</div>
                        <div className="flex items-center"><FaCode className="mr-2 text-purple-500" />RESTful APIs</div>
                        <div className="flex items-center"><FaCode className="mr-2 text-purple-500" />GraphQL</div>
                        <div className="flex items-center"><FaCode className="mr-2 text-purple-500" />JWT, OAuth</div>
                        <div className="flex items-center"><FaCode className="mr-2 text-purple-500" />WebSockets / Socket.io</div>
                        <div className="flex items-center"><FaCode className="mr-2 text-purple-500" />Serverless Architecture</div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4"><FaDatabase className="mr-2 text-orange-600" />Database & DevOps</h4>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center"><HiDatabase className="mr-2 text-orange-500" />MySQL</div>
                        <div className="flex items-center"><HiDatabase className="mr-2 text-orange-500" />MongoDB & PostgreSQL</div>
                        <div className="flex items-center"><HiDatabase className="mr-2 text-orange-500" />Redis</div>
                        <div className="flex items-center"><HiDatabase className="mr-2 text-orange-500" />Docker</div>
                        <div className="flex items-center"><HiDatabase className="mr-2 text-orange-500" />Kubernetes</div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'experience',
        label: 'Experience',
        icon: <FaUserTie className="text-fuchsia-300 mr-2" />,
        content: (
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 overflow-hidden">
                    <div className="p-4 leading-normal">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Senior Lecturer — Mekdela Amba University</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">2019 - Present</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
                            Teaching advanced programming, software development, and software engineering principles. Provided training on software-related topics.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 overflow-hidden">
                    <div className="p-4 leading-normal">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Senior Lecturer — Mekdela Amba University</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">2019 - Present</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
                            Teaching computer science students core development and engineering subjects with practical projects and mentorship.
                        </p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'education',
        label: 'Education',
        icon: <FaGraduationCap className="text-lime-300 mr-2" />,
        content: (
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 overflow-hidden">
                    <div className="p-4 leading-normal">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">MSc in Information Technology</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Aksum University, Ethiopia (2019 - 2020)</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
                            Specialized in Software Engineering & Web Technologies. Focused on Advanced Data Structures and OOP Design.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 overflow-hidden">
                    <div className="p-4 leading-normal">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">BSc in Information Technology</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">University of Gondar, Ethiopia (2012 - 2015)</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
                            Graduated with honors. Focused on programming, algorithms, and databases.
                        </p>
                    </div>
                </div>
            </div>
        ),
    },
];

const Resume = () => {
    const [activeTab, setActiveTab] = useState('skills');
    const currentTab = tabs.find(tab => tab.id === activeTab);

    return (
        <section id="resume" className=" bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl mx-auto">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Professional Journey</h2>
                    <br />
                    <h6 className="text-gray-600 dark:text-gray-400">Explore my professional experience, education, and skills.</h6>
                </div>

                <div className="md:flex gap-8">
                    {/* Sidebar Tabs */}
                    <ul className="flex md:flex-col gap-4 text-sm font-medium text-gray-600 dark:text-gray-400 md:w-1/4 mb-6 md:mb-0">
                        {tabs.map(tab => (
                            <li key={tab.id}>
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center w-full px-4 py-3 rounded-lg transition-all ${activeTab === tab.id
                                        ? 'text-white bg-blue-700 dark:bg-blue-600'
                                        : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    {tab.icon}
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Main Content */}
                    <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow h-136">
                        {currentTab.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;