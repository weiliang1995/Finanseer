import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import { kpisData, productsData, transactionsData } from "./data/data.js";
import kpiRoutes from "./routes/kpiRoute.js";
import productRoutes from "./routes/productRoute.js";
import transactionRoutes from "./routes/transactionRoute.js";
import kpi from "./models/kpiModel.js";
import product from "./models/productModel.js";
import transaction from "./models/transactionModel.js";

// Configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

// Mongoose Setup
const PORT = process.env.PORT || 9000;
const url = process.env.MONGO_URL.replace(
  "<db_password>",
  process.env.PASSWORD
);
mongoose
  .connect(url)
  .then(async () => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

    /* ADD DATA ONLY WHEN NEEDED*/
    // await mongoose.connection.db.dropDatabase();
    // kpi.insertMany(kpisData);
    // product.insertMany(productsData);
    // transaction.insertMany(transactionsData);
  })
  .catch((err) => console.log(`${err} did not connect.`));
