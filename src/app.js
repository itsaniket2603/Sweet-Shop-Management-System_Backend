import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import sweetRoutes from "./routes/sweet.routes.js";

const app = express();

/* ✅ PERFECT CORS SETUP */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://sweet-shop-management-system-fronte-neon.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// 🔥 VERY IMPORTANT (preflight)
app.options("*", cors());


app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetRoutes);

export default app;
