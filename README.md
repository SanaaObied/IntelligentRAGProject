# Intelligent RAG Project

![AI Hero Image](https://images.unsplash.com/photo-1610878180933-99b4f24f69d7?auto=format&fit=crop&w=1350&q=80)

## Overview
**Intelligent RAG Project** is an AI-powered **Retrieval-Augmented Generation (RAG) System**.  
It allows users to ask questions, receive context-aware AI answers, manage tasks, and integrate Google Calendar.  

This project includes both:
- **Frontend:** React + Tailwind CSS for a modern, responsive interface.  
- **Backend:** Python Flask serving AI responses.  

---

## Features
- Ask intelligent questions to the RAG system.  
- Task management interface.  
- Google Calendar integration for scheduling.  
- Interactive and colorful UI with hover effects.  
- Gradient backgrounds and cards for modern design.  

---

## Project Structure

IntelligentRAGProject/
│
├── backend/
│ ├── app.py
│ ├── requirements.txt
│ ├── data/
│ │ └── dataset.csv
│ └── rag_module.py
│
├── frontend/
│ ├── package.json
│ ├── public/
│ │ └── index.html
│ └── src/
│ ├── App.js
│ ├── index.js
│ ├── components/
│ │ ├── Navbar.js
│ │ ├── Tasks.js
│ │ └── GoogleCalendar.js
│ └── styles/
│ └── App.css
│
└── README.md


---

## Installation

### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py


Frontend
```bash
cd frontend
npm install
npm start


Frontend will run at http://localhost:3000

Backend will run at http://localhost:5000

How to Use

Open the frontend in your browser (http://localhost:3000).

Type a question in the "Ask" section and submit to receive AI answers.

Manage tasks in the Tasks section.

Connect your Google Calendar in the Calendar section.

Notes

Make sure the backend server is running before using the frontend.
