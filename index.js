import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"

import kpiRoutes from "./routes/kpi.js"
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
// CONFIGURATIONS

dotenv.config()

const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

/* KPI ROUTES */
app.use('/kpi', kpiRoutes)
app.use('/product', productRoutes)
app.use('/transaction', transactionRoutes)

console.log('hello')
const PORT = process.env.PORT || 9800
// MONGOOSE SETUP

// mongoose.set('strictQuery', true);
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        app.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`))
    })
    .catch((error) => console.log(`${error} \ndid not connect`))
