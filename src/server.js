import dotenv from "dotenv";
dotenv.config(); // 👈 sabse pehle env load karo

import app from "./app.js";
import connectDB from "./config/db.js";

// Database connect
connectDB();

// Port set (env se ya default)
const PORT = process.env.PORT || 5002;

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
