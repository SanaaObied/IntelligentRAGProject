# Intelligent RAG Project

![AI Hero Image](https://www.chitika.com/content/images/2025/02/image4-1.jpg)

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
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── data/
│   │   └── dataset.csv
│   └── rag_module.py
│
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       ├── index.js
│       ├── components/
│       │   ├── Navbar.js
│       │   ├── Tasks.js
│       │   └── GoogleCalendar.js
│       └── styles/
│           └── App.css
│
└── README.md


---

## Installation

### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend
```bash
cd frontend
npm install
npm start
```

---

## Running the Project

1. Start the backend server first (Flask):
   ```bash
   cd backend
   python app.py
   ```
   Backend will run at: http://localhost:5000  

2. Start the frontend server (React):
   ```bash
   cd frontend
   npm start
   ```
   Frontend will run at: http://localhost:3000  

3. Open your browser and go to http://localhost:3000 to use the application.

---

## Frontend Features

### Navbar
- Navigation bar to switch between **Ask**, **Tasks**, and **Calendar** sections.  
- Responsive design with hover effects.

### Tasks Component
- Add, edit, and delete tasks.  
- Mark tasks as completed.  
- Interactive cards with gradient backgrounds.

### Google Calendar Component
- Connect your Google account.  
- View and manage your events.  
- Schedule tasks directly from the RAG system.

### Ask Component
- Ask questions to the AI RAG system.  
- Receive context-aware answers.  
- Auto-scroll and highlight responses for clarity.

---

## Notes
- Make sure the backend server is running before using the frontend.  
- For Google Calendar integration, you will need to configure OAuth credentials in the frontend.  
- Tailwind CSS is used for styling; ensure `npm install` runs without errors.  
- You can extend the dataset in `backend/data/dataset.csv` to improve AI responses.

---

