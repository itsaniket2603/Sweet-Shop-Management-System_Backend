import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import sweetRoutes from "./routes/sweet.routes.js";

const app = express();

/* ✅ BULLETPROOF CORS CONFIG */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://sweet-shop-management-system-fronte-one.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false, // VERY IMPORTANT
  })
);

/* ✅ Preflight handled automatically */
app.use(express.json());

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetRoutes);

export default app;
