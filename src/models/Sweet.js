import mongoose from "mongoose";

/**
 * Sweet schema
 * Represents one sweet item in shop
 */
const sweetSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    price: Number,
    quantity: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Sweet", sweetSchema);
