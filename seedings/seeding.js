import mongoose from "mongoose";
import dotenv from "dotenv";

import KPI from "../models/KPI.js";

import { kpis, transactions, products } from '../data/data.js'
import Transaction from "../models/Transaction.js";
import Product from "../models/Product.js";
dotenv.config()

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        await mongoose.connection.db.dropDatabase();
        await KPI.insertMany(kpis)
        await Transaction.insertMany(transactions)
        await Product.insertMany(products)
        process.exit(0)
    })