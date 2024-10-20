import React, { useState } from 'react';
import Footer from './Footer';
import './AI.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages((prev) => [...prev, userMessage]);
      setInput('');
      setLoading(true); 
      setError(null); 

      // Fetch response from the OpenAI API
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': ``, // Replace with your OpenAI API key
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo', 
            messages: [{ role: 'user', content: input }],
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const botMessage = {
          text: data.choices[0].message.content,
          sender: 'bot',
        };
        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        console.error('Error fetching from API:', error);
        setError('Error: Could not fetch response from the bot.'); 
      } finally {
        setLoading(false); 
      }
    }
  };

  return (
    <>  
    <div>
    <h1><br/>AI Chatbot</h1>
    </div>
   <body>
    <div className="chatbot-container">
    <div className="chatbot">
      <h1 className='chatbotheading'>MM's Chatbot</h1> {/* Add the heading here */}
      <div className="message-display">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="loading">Loading...</div>} {/* Show loading message */}
        {error && <div className="error">{error}</div>} {/* Show error message */}
      </div>
      <form onSubmit={handleSend} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" disabled={loading}>Send</button> {/* Disable button while loading */}
      </form>
    </div>
    </div>
    </body>
    <Footer/>
    </>
  );
};

export default Chatbot;
