import React from 'react';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Page Sections
import Heros from './components/Heros';
import Service from './pages/Service';
import Resume from './pages/Resume';
import ContactMe from './pages/ContactMe';

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 scroll-smooth">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="scroll-mt-20 py-10">
          <Heros />
          <hr className="my-10 border-gray-200 dark:border-gray-700 w-64 mx-auto" />
        </section>

        {/* Services Section */}
        <section id="services" className="scroll-mt-20 py-10">
          <Service />
          <hr className="my-10 border-gray-200 dark:border-gray-700 w-64 mx-auto" />
        </section>

        {/* Resume Section */}
        <section id="resume" className="scroll-mt-20 py-10">
          <Resume />
          <hr className="my-10 border-gray-200 dark:border-gray-700 w-64 mx-auto" />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20 py-12 mb-8">
          <ContactMe />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
