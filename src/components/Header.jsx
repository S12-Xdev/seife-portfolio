import { useEffect, useState } from 'react';
import logo from '../assets/images/llll.jpg';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'Service', link: '#services' },
        { name: 'Resume', link: '#resume' },
        { name: 'Contact Me', link: '#contact' },
    ];

    // Set active link based on the current hash
    useEffect(() => {
        const handleHashChange = () => {
            setActiveLink(window.location.hash || '#home');
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Initialize on mount

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
            <nav className="max-w-screen-xl mx-auto px-4 lg:px-6 py-3 flex flex-wrap justify-between items-center">
                {/* Logo */}
                <a href="#home" className="flex items-center">
                    <img src={logo} className="w-8 h-8 rounded-full mr-2" alt="Logo" />
                    <span className="text-xl font-semibold text-blue-500">~ S12-Xdev</span>
                </a>

                {/* Mobile toggle */}
                <div className="flex items-center lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Navigation Menu */}
                <div
                    className={`${mobileMenuOpen ? 'flex' : 'hidden'
                        } flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
                >
                    <ul className="flex flex-col lg:flex-row lg:space-x-8 font-medium w-full lg:w-auto">
                        {navItems.map(({ name, link }) => (
                            <li key={link}>
                                <a
                                    href={link}
                                    className={`block py-2 px-4 rounded transition-all duration-200 ${activeLink === link
                                            ? 'text-blue-700 dark:text-blue-400 font-semibold'
                                            : 'text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white'
                                        }`}
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
