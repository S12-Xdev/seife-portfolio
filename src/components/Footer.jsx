import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import logo from '../assets/images/llll.jpg'; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              alt="Your Logo"
              className="w-8 h-8 rounded-full shadow-md"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Seifu Dev
            </span>
          </a>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#home" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#service" className="hover:underline me-4 md:me-6">
                Service
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:underline me-4 md:me-6">
                Resume
              </a>
            </li>
            <li>
              <a href="#contactMe" className="hover:underline">
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{' '}
            <a
              href="#"
              className="hover:underline font-semibold text-blue-600 dark:text-blue-400"
            >
              Seifu Tadesse
            </a>
            . All Rights Reserved.
          </span>

          <div className="flex gap-4 mt-4 sm:mt-0">
            <a
              href="https://www.linkedin.com/in/seifu-tadesse-718b71270/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-blue-700 dark:hover:text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/S12-Xdev"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
