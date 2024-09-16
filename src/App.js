import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the pages
import LoginPage from './components/loginpage';
import HomePage from './components/homepage';
import ChatbotPage from './components/chatbotpage';
import TranslatorPage from './components/translatorpage';
import FAQPage from './components/faqpage';
import AboutPage from './components/aboutpage';

function App() {
  return (
    <Router>
      <div>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/translator" element={<TranslatorPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
