import mongoose from "mongoose";
import dotenv from "dotenv";

import KPI from "../models/KPI.js";

import { kpis } from '../data/data.js'
dotenv.config()

console.log({ MONGO_URL: process.env.MONGO_URL });
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        await mongoose.connection.db.dropDatabase();
        console.log(kpis.length);
        await KPI.insertMany(kpis)
        process.exit(0)
    })