import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatInput from './components/ChatInput';
import ChatResponse from './components/ChatResponse'  ;
import { fetchChatResponse } from './services/api';
function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);

    try {
      const apiresponse = await fetchChatResponse(question);
      setResponse(apiresponse);
    } catch (error) {
      console.error('Error fetching response:', error);
      alert('An error occurred while fetching the response. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='App'>
      <header className='bg-primary text-white p-4 text-center'>
        <h1>AI ChatBot (GEMINI)</h1>
      </header>

      <ChatInput onSubmit={handleQuestionSubmit} />
      {loading && <p className='text-center mt-3'>Loading...</p>}
      {response && <ChatResponse response={response} />}
    </div>
  );
}

export default App;

