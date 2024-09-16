import React, { useState } from 'react';
import '../styles/translator.css';

const TranslatorPage = () => {
    const [input, setInput] = useState('');
    const [translation, setTranslation] = useState('');

    const handleTranslate = () => {
        // Dummy translation logic
        setTranslation(`Translated version of "${input}"`);
    };

    return (
        <div className="translator-container">
            <h1>Fruit Translator</h1>
            <input
                type="text"
                placeholder="Enter fruit name"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleTranslate}>Translate</button>
            {translation && <p>{translation}</p>}
        </div>
    );
};

export default TranslatorPage;
