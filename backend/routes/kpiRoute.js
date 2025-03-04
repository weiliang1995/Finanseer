import express from "express";
import kpi from "../models/kpiModel.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await kpi.find();
    res.status(200).json(kpis);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default router;
