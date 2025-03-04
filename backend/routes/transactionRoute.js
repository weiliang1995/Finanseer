import express from "express";
import transaction from "../models/transactionModel.js";

const router = express.Router();

router.get("/transactions", async (req, res) => {
  try {
    const transactions = await transaction
      .find()
      .limit(50)
      .sort({ createdOn: -1 });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default router;
