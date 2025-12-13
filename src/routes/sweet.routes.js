import express from "express";
import {
  getSweets,
  addSweet,
  updateSweet,
  deleteSweet,
  purchaseSweet,
} from "../controllers/sweet.controller.js";


import auth from "../middleware/auth.middleware.js";
import admin from "../middleware/admin.middleware.js";

const router = express.Router();

// USER
router.get("/", auth, getSweets);
router.post("/:id/purchase", auth, purchaseSweet);

// ADMIN
router.post("/", auth, admin, addSweet);
router.put("/:id", auth, admin, updateSweet);     // ✅ ADD THIS
router.delete("/:id", auth, admin, deleteSweet);  // ✅ ADD THIS

export default router;
