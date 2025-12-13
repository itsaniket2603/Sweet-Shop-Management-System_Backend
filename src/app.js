import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import sweetRoutes from "./routes/sweet.routes.js";

const app = express;

/* ✅ FINAL CORS CONFIG */
app.use(
  cors({
    origin: "https://sweet-shop-management-system-fronte-xi.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  })
);

/* ✅ Handle preflight */
app.options("*", cors());

app.use(express.json());

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetRoutes);

export default app;
