### 🍬 Sweet Shop Management System – Backend

### 📌 Project Overview
Sweet Shop Management System Backend ek secure, scalable aur production-ready REST API hai jo authentication, inventory management aur role-based access control handle karta hai.  
Yeh backend frontend SPA ko power karta hai aur real-world business rules follow karta hai.

---

### 🎯 Key Objectives
- Secure authentication using JWT
- Role-based access (User & Admin)
- Reliable inventory management
- Clean API architecture
- Test-driven and scalable design

---

### 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs
- cors
- dotenv

---

### 📁 Folder Structure
backend/
│
├── src/
│ ├── config/
│ │ └── db.js
│ │ → MongoDB connection setup
│
│ ├── controllers/
│ │ ├── auth.controller.js
│ │ │ → User registration & login logic
│ │ └── sweet.controller.js
│ │ → Sweet CRUD, purchase & restock logic
│
│ ├── middleware/
│ │ ├── auth.middleware.js
│ │ │ → JWT token verification
│ │ └── admin.middleware.js
│ │ → Admin-only route protection
│
│ ├── models/
│ │ ├── User.js
│ │ │ → User schema (name, email, password, role)
│ │ └── Sweet.js
│ │ → Sweet schema (name, category, price, quantity)
│
│ ├── routes/
│ │ ├── auth.routes.js
│ │ │ → Authentication routes
│ │ └── sweet.routes.js
│ │ → Sweet & inventory routes
│
│ ├── app.js
│ │ → Express app configuration
│ │
│ └── server.js
│ → Server bootstrap
│
├── .env
│ → Environment variables
│
├── package.json
│ → Dependencies & scripts
│
└── README.md


---

### 🔐 Authentication & Authorization
- JWT-based authentication
- Tokens include user ID & role
- Middleware validates token on protected routes
- Admin routes restricted using role validation

---

### 🔑 Authentication APIs
| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT |

---

### 🍭 Sweet Management APIs (Protected)
| Method | Endpoint | Access | Description |
|------|--------|--------|------------|
| GET | `/api/sweets` | User/Admin | Fetch all sweets |
| POST | `/api/sweets` | Admin | Add a new sweet |
| PUT | `/api/sweets/:id` | Admin | Update sweet |
| DELETE | `/api/sweets/:id` | Admin | Delete sweet |

---

### 📦 Inventory APIs
| Method | Endpoint | Access | Description |
|------|--------|--------|------------|
| POST | `/api/sweets/:id/purchase` | User | Purchase a sweet |
| POST | `/api/sweets/:id/restock` | Admin | Restock sweet quantity |

---

### 🧪 Test-Driven Development (TDD)
This backend follows **Red → Green → Refactor** methodology.

#### Covered Scenarios
- User registration & login
- JWT authentication validation
- Role-based access checks
- Inventory update logic
- Edge cases (out of stock, unauthorized access)

Tests are designed to validate **business logic**, not just endpoints.

---

### 🌍 CORS & Security
- Strictly allowed frontend origins
- Preflight OPTIONS handling
- JWT protected routes
- Password hashing using bcrypt
- Secure environment variables

---

### ⚙️ Environment Variables
Create a `.env` file:



PORT=5002
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


---

### 🚀 Running Locally
```bash
# Install dependencies
npm install

# Development
npm run dev

# Production
npm start


Server runs at:

http://localhost:5002

☁️ Deployment

Platform: Render

Auto-deploy on Git push

Environment variables managed via Render dashboard

Production-ready configuration

🤖 My AI Usage
Tools Used

ChatGPT (OpenAI)

How AI Was Used

API design brainstorming

Middleware & JWT flow clarification

Debugging CORS & deployment issues

Writing clean documentation

Reflection

AI significantly improved productivity and debugging speed.
All final logic, validations, and architecture decisions were manually reviewed and implemented to ensure correctness and deep understanding.

✅ Conclusion

This backend is:

✔ Secure

✔ Scalable

✔ Role-aware

✔ Testable

✔ Production-ready
