import express from "express";
import product from "../models/productModel.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default router;
