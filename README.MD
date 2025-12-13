## 🍬 Sweet Shop Management System – Backend

## A robust, secure, and scalable backend for the Sweet Shop Management System, built using Node.js, Express, MongoDB, and JWT authentication, following clean coding practices and Test-Driven Development (TDD) principles.

## Project Overview

# This backend serves as the core engine of the Sweet Shop Management System.
# It provides secure APIs for:

# User authentication (Admin & User)

# Sweet inventory management

# Purchase & stock control

# Role-based access control (RBAC)

# The system ensures data consistency, security, and real-world readiness.

# 🛠 Tech Stack

# Runtime: Node.js

Framework: Express.js

Database: MongoDB (Mongoose ODM)
 
Authentication: JWT (JSON Web Token)

# Password Security: bcryptjs

# CORS Handling: cors

# Environment Config: dotenv

# Testing (Planned / Implemented): Jest / Supertest

# Deployment: Render

## 📁 Folder Structure (Detailed)
## backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │       → MongoDB connection logic
│
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   │   → Handles user registration & login
│   │   └── sweet.controller.js
│   │       → Handles sweets CRUD, purchase & restock logic
│
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   │   → JWT token verification
│   │   └── admin.middleware.js
│   │       → Restricts admin-only routes
│
│   ├── models/
│   │   ├── User.js
│   │   │   → User schema (name, email, password, role)
│   │   └── Sweet.js
│   │       → Sweet schema (name, category, price, quantity)
│
│   ├── routes/
│   │   ├── auth.routes.js
│   │   │   → Authentication endpoints
│   │   └── sweet.routes.js
│   │       → Sweet & inventory endpoints
│
│   ├── app.js
│   │   → Express app configuration (middlewares & routes)
│   │
│   └── server.js
│       → App bootstrap & server startup
│
├── .env
│   → Environment variables (DB URI, JWT secret)
│
├── package.json
│   → Project metadata & scripts
│
└── README.md

### Authentication & Authorization
User Roles

User → Can view & purchase sweets

Admin → Full inventory control (add/update/delete/restock)

JWT Flow

User logs in

Server generates JWT with id & role

Token is sent in Authorization: Bearer <token>

Middleware validates token on protected routes

#  📡 API Endpoints
🔑 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login & receive JWT
🍭 Sweet Routes (Protected)
Method	Endpoint	Access	Description
GET	/api/sweets	User/Admin	Get all sweets
POST	/api/sweets	Admin	Add a new sweet
PUT	/api/sweets/:id	Admin	Update sweet
DELETE	/api/sweets/:id	Admin	Delete sweet
📦 Inventory Routes
Method	Endpoint	Access	Description
POST	/api/sweets/:id/purchase	User	Purchase sweet
POST	/api/sweets/:id/restock	Admin	Increase quantity
🧪 Test-Driven Development (TDD)

This project follows Red → Green → Refactor methodology.

Test Coverage Includes:

User registration & login

JWT authentication

Role-based access

Inventory update logic

Edge cases (out-of-stock, invalid token, unauthorized access)

Tests are written to ensure business logic correctness, not just coverage.

🌍 CORS & Security

Explicitly allowed frontend domains

Handles preflight OPTIONS requests

JWT-protected routes

Password hashing with bcrypt

No sensitive data exposed

⚙️ Environment Variables

Create a .env file:

PORT=5002
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

🚀 Running the Project Locally
# Install dependencies
npm install

# Start development server
npm run dev

# Production
npm start


Server runs at:

http://localhost:5002

☁️ Deployment

Backend: Render

Environment variables configured via Render Dashboard

Auto-deploy enabled on git push

🤖 My AI Usage
Tools Used

ChatGPT (OpenAI)

How AI Was Used

API design brainstorming

Middleware logic refinement

Debugging CORS & JWT issues

Writing clean controller structure

Improving README documentation

Reflection

AI significantly improved development speed and debugging efficiency.
However, all final logic, validations, and architectural decisions were manually reviewed and implemented to ensure correctness and understanding.

✅ Conclusion

This backend is:

✔ Secure

✔ Scalable

✔ Testable

✔ Production-ready

It demonstrates real-world backend engineering practices, suitable for interviews and enterprise applications.
