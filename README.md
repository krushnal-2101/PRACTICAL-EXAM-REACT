<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/67a3b31c-6814-4899-b7df-7bafb94d132a" />


🏨 Hotel G1 – Room Reservation System (React)

A simple hotel room reservation web application built with React, Redux, and JSON Server.
This project allows users to view rooms, check availability, and manage reservations.

🚀 Live Demo

🔗 Deployed App:
https://luxury-sprite-a1db45.netlify.app

📌 Features

🔐 User Login (Admin / Staff)

🛏 View hotel rooms with:

Room type

Price per night

Availability status

📋 Reservation management

🔄 State management using Redux

⚡ Fast development with Vite

🗄 Mock backend using JSON Server

🧰 Tech Stack

Frontend: React, Redux, Vite

Styling: CSS

Backend (Mock): JSON Server

Deployment: Netlify

📁 Project Structure
react-practical-exam/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ReservationForm.jsx
│   │   ├── ReservationList.jsx
│   │   └── RoomsList.jsx
│   │
│   ├── pages/
│   │   └── Login.jsx
│   │
│   ├── redux/
│   │   ├── actions.js
│   │   ├── AuthReducer.js
│   │   ├── reservationReducers.js
│   │   ├── roomActions.js
│   │   ├── roomReducer.js
│   │   └── store.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── db.json
├── package.json
├── vite.config.js
└── README.md

🔑 Login Credentials
Role	Username	Password
Admin	admin	admin123
Staff	staff	staff123
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/react-practical-exam.git
cd react-practical-exam

2️⃣ Install dependencies
npm install

3️⃣ Start JSON Server
npx json-server --watch db.json --port 3001

4️⃣ Run the React app
npm run dev

📸 Screenshots
Rooms Page

Displays all rooms with price and availability status.

📝 Notes

This project is created for practical / exam purposes

Uses mock data, not a real backend

Authentication is basic (for demo only)

👨‍💻 Author

Krushnal
React Practical Exam Project
