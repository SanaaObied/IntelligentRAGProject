import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import GoogleCalendar from './components/GoogleCalendar';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    if (!question) return;
    try {
      const res = await fetch('http://localhost:5000/api/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });
      const data = await res.json();
      setAnswer(data.answer);
    } catch (error) {
      setAnswer('Error: Could not reach the server');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50 pt-16 font-sans">
      <Navbar />

      <div className="container mx-auto p-6 space-y-10">

        {/* RAG Section */}
        <section id="home" className="p-6 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ask the Intelligent RAG System</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Type your question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-400"
            />
            <button
              onClick={handleAsk}
              className="bg-pink-500 text-white px-6 py-4 rounded-xl hover:bg-pink-600 transition font-semibold shadow-md"
            >
              Ask
            </button>
          </div>
          {answer && (
            <div className="mt-4 p-5 bg-yellow-50 border-l-4 border-pink-500 rounded-xl shadow-inner hover:shadow-lg transition">
              <h3 className="font-semibold mb-2 text-gray-700">Answer:</h3>
              <p className="text-gray-800">{answer}</p>
            </div>
          )}
        </section>

        {/* Tasks Section */}
        <section id="tasks" className="p-6 rounded-2xl bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-50 shadow-lg transform hover:scale-105 transition duration-300">
          <Tasks />
        </section>

        {/* Google Calendar Section */}
        <section id="calendar" className="p-6 rounded-2xl bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 shadow-lg transform hover:scale-105 transition duration-300">
          <GoogleCalendar />
        </section>

      </div>
    </div>
  );
}

export default App;
