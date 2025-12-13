import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import sweetRoutes from "./routes/sweet.routes.js";

const app = express();

/* ✅ CORS (production + local) */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://sweet-shop-management-system-fronte-gamma.vercel.app",
      "https://sweet-shop-management-system-fronte-one.vercel.app",
      "https://sweet-shop-management-system-fronte-neon.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

/* ✅ ROOT ROUTE (THIS FIXES Cannot GET /) */
app.get("/", (req, res) => {
  res.send("🚀 Sweet Shop Backend is running");
});

/* API ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetRoutes);

export default app;
