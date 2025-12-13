import Sweet from "../models/Sweet.js";

/**
 * GET all sweets
 */
export const getSweets = async (req, res) => {
  const sweets = await Sweet.find();
  res.json(sweets);
};

/**
 * ADD new sweet (Admin only)
 */
export const addSweet = async (req, res) => {
  const sweet = await Sweet.create(req.body);
  res.status(201).json(sweet);
};

/**
 * UPDATE sweet (Admin only)
 */
export const updateSweet = async (req, res) => {
  const { id } = req.params;

  const updatedSweet = await Sweet.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
  );

  if (!updatedSweet) {
    return res.status(404).json({ message: "Sweet not found" });
  }

  res.json(updatedSweet);
};

/**
 * DELETE sweet (Admin only)
 */
export const deleteSweet = async (req, res) => {
  const { id } = req.params;

  const deleted = await Sweet.findByIdAndDelete(id);

  if (!deleted) {
    return res.status(404).json({ message: "Sweet not found" });
  }

  res.json({ message: "Sweet deleted successfully" });
};

/**
 * PURCHASE sweet (User)
 */
export const purchaseSweet = async (req, res) => {
  const { id } = req.params;

  const sweet = await Sweet.findById(id);
  if (!sweet || sweet.quantity <= 0) {
    return res.status(400).json({ message: "Out of stock" });
  }

  sweet.quantity -= 1;
  await sweet.save();

  res.json(sweet);
};
