import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

loadType(mongoose);

const transactionSchema = new mongoose.Schema(
  {
    buyer: {
      type: String,
    },
    amount: {
      type: mongoose.Types.Currency,
      currency: "MYR",
      get: (v) => v / 100,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const transaction = mongoose.model("Transaction", transactionSchema);

export default transaction;
