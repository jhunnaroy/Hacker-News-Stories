MERN Hacker News Stories App

A full-stack MERN application that scrapes the top stories from Hacker News, stores them in MongoDB, and allows users to bookmark stories after authentication.

🚀 Live Demo
Frontend

Live Frontend Demo

📌 Features
🔹 Web Scraper
Scrapes top 10 stories from Hacker News
Extracts:
Title
URL
Points
Author
Posted Time
Automatically runs on server start
Can also be triggered manually via API
🔹 Authentication
User Registration
User Login
JWT Authentication
Protected Routes
🔹 Stories
View all stories
Stories sorted by points
Bookmark stories
Remove bookmarks
Protected Bookmarks Page
🔹 Frontend
Responsive UI using Tailwind CSS
React Context API for authentication state
Mobile responsive Navbar
Bookmark functionality
Loading states
🛠️ Tech Stack
Frontend
React.js
React Router DOM
Axios
Tailwind CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
Cheerio
Axios
📂 Folder Structure
project-root/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── scraper/
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── .env
│
└── README.md
⚙️ Environment Variables
Backend .env
PORT=5000

MONGODB_URI=your_mongodb_atlas_url

JWT_SECRET=your_secret_key

FRONTEND_URL=https://frontend-1-oj2o.onrender.com
Frontend .env
VITE_API_URL=https://your-backend-url.onrender.com
📦 Installation
Clone Repository
git clone <your-repository-url>
Backend Setup
cd backend

npm install

npm run dev
Frontend Setup
cd frontend

npm install

npm run dev
🔗 API Endpoints
Authentication
Register
POST /api/auth/register
Login
POST /api/auth/login
Stories
Get All Stories
GET /api/stories
Get Single Story
GET /api/stories/:id
Toggle Bookmark
POST /api/stories/:id/bookmark
Scraper
Run Scraper
POST /api/scrape
🌐 Deployment
Frontend
Render
Backend
Render
Database
MongoDB Atlas
👨‍💻 Author

Jhunna Kumar
