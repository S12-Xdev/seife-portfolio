import React from 'react';
import Header from '../components/Header';
import Heros from '../components/Heros';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Heros />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
