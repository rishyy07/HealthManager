import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Fruit.ai</h1>
            <div className="services">
                <Link to="/chatbot" className="service-card">
                    <h2>Chatbot</h2>
                    <p>Explore fruits through our chatbot.</p>
                </Link>
                <Link to="/translator" className="service-card">
                    <h2>Translator</h2>
                    <p>Translate names of fruits into different languages.</p>
                </Link>
                <Link to="/faq" className="service-card">
                    <h2>FAQs</h2>
                    <p>Find answers to common questions about fruits.</p>
                </Link>
                <Link to="/about" className="service-card">
                    <h2>About</h2>
                    <p>Learn more about Fruit.ai.</p>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
