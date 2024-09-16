import React, { useEffect, useState } from 'react';
import '../styles/faq.css';

const FAQPage = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/faqs')
            .then((response) => response.json())
            .then((data) => {
                setFaqs(data);
                setLoading(false);
            })
            .catch((error) => {
                setError('Failed to fetch FAQs.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="faq-container">Loading FAQs...</div>;
    }

    if (error) {
        return <div className="faq-container">{error}</div>;
    }

    return (
        <div className="faq-container">
            <h1>FAQs</h1>
            {faqs.length > 0 ? (
                <ul>
                    {faqs.map((faq) => (
                        <li key={faq.id}>
                            <h2>{faq.question}</h2>
                            <p>{faq.answer}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No FAQs available.</p>
            )}
        </div>
    );
};

export default FAQPage;
