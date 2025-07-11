import React from 'react';
import image from '../assets/images/MyProfile.png';

const Heros = () => {
  return (
    <section className="bg-white dark:bg-gray-900 pt-12">
      <div className="grid max-w-screen-xl px-6 py-1 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 items-center">
        {/* Left section */}
        <div className="mr-auto place-self-center lg:col-span-7">
          {/* Centered text block */}
          <div className="flex justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <h1 className="max-w-2xl mb-6 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-blue-400 ">
                <br /> Seifu Tadesse <br />
                <span className="text-primary-600 dark:text-primary-500 text-3xl text-blue-300 font-medium">
                  Full Stack Developer
                </span>
              </h1>

              <p className="max-w-2xl mb-6 font-light text-blue-100 md:text-lg lg:text-xl dark:text-gray-400 mx-auto lg:mx-0">
                I specialize in crafting intuitive, scalable web solutions that prioritize user experience, speed, and long-term maintainability. By leveraging industry-standard technologies and proven best practices, I develop applications that are not only technically sound but also aligned with real business goals. Every solution I build is tailored to solve problems effectively while ensuring performance, security, and seamless user interaction across all devices.
              </p>
            </div>
          </div>


          {/* Left-aligned buttons */}
          <div className="flex space-x-4 mt-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Hire Me
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right section - profile image */}
        <div className="hidden lg:flex items-center justify-center lg:col-span-5 lg:mt-0">
          <div className="relative w-[28rem] h-[28rem] flex items-center justify-center">

            {/* Top Arc Ring */}
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                clipPath: 'inset(0 0 2% 0)',
                borderRadius: '9999px',
                borderTop: '1px solid transparent',
                borderLeft: '1px solid rgba(87,199,133,0.8)',
                borderRight: '1px solid rgba(237,221,83,0.8)',
                animation: 'spin 10s linear infinite',
                zIndex: 1,
              }}
            />

            {/* White Mask Ring */}
            <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-900 z-10"></div>

            {/* Profile Image */}
            <img
              src={image}
              alt="Seifu Tadesse"
              className="w-[24rem] h-[24rem] rounded-full object-cover relative z-20"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Heros;
