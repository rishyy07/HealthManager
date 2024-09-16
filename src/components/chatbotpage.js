import React, { useState } from 'react';
import '../styles/chatbot.css';

// Example list of fruits and details
const fruitsData = {
    apple: {
        name: 'Apple',
        description: 'Apples are nutritious and good for health. They are rich in fiber and vitamin C.',
        image: 'https://via.placeholder.com/100x100?text=Apple',
    },
    banana: {
        name: 'Banana',
        description: 'Bananas are rich in potassium and great for maintaining healthy blood pressure.',
        image: 'https://via.placeholder.com/100x100?text=Banana',
    },
    mango: {
        name: 'Mango',
        description: 'Mangoes are a tropical fruit high in vitamins A and C and have a sweet flavor.',
        image: 'https://via.placeholder.com/100x100?text=Mango',
    },
    // Add more fruits as needed
};

const ChatbotPage = () => {
    const [messages, setMessages] = useState([]); // Chat messages between user and bot
    const [input, setInput] = useState(''); // User input

    // Handle user message submission
    const handleSendMessage = () => {
        if (input.trim() === '') return;

        const userMessage = { text: input, sender: 'user' };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        // Check if fruit information is available
        const fruit = fruitsData[input.toLowerCase()];
        if (fruit) {
            const botMessage = {
                text: `Here is some information about ${fruit.name}: ${fruit.description}`,
                image: fruit.image,
                sender: 'bot',
            };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } else {
            const botMessage = {
                text: `Sorry, I don't have information about "${input}". Try asking about another fruit.`,
                sender: 'bot',
            };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        }

        // Clear input field after sending the message
        setInput('');
    };

    // Handle the Enter key to send a message
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chatbot-container">
            <h1>Fruit.ai Chatbot</h1>
            <div className="chat-window">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        <p>{message.text}</p>
                        {message.image && <img src={message.image} alt={message.text} />}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Ask me about a fruit..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatbotPage;
