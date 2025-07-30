# OnlineQuizApplication
 Full Stack Quiz App (MERN)

This is a dynamic full-stack quiz app built using React (frontend), Node.js + Express (backend), and MongoDB (database).

## Features
- Take quizzes by category
- Dynamically fetch questions
- Admins can post new questions

##  Technologies Used
- React + Tailwind CSS
- Node.js + Express
- MongoDB with Mongoose
- Vite as React build tool
##  How to Run Locally

### 1. Backend
```bash
cd server
npm install
# Add a .env file with: MONGO_URI=your_mongo_connection_string
node server.js
```

### 2. Frontend
```bash
cd client
npm install
npm run dev
```

### 3. Visit
```
Frontend: http://localhost:5173
Backend: http://localhost:5000/api/quiz
```

## Deployment
- Frontend: Deploy to Netlify or Vercel
- Backend: Deploy to Render, Railway, or Cyclic
- MongoDB: Use MongoDB Atlas (cloud DB)
