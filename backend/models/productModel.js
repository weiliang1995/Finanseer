import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

loadType(mongoose);

const productSchema = new mongoose.Schema(
  {
    price: {
      type: mongoose.Types.Currency,
      currency: "MYR",
      get: (v) => v / 100,
    },
    expense: {
      type: mongoose.Types.Currency,
      currency: "MYR",
      get: (v) => v / 100,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const product = mongoose.model("Product", productSchema);

export default product;
