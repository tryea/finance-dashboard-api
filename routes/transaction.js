// transactionRoutes
import express from "express"
import Transaction from "../models/Transaction.js"

const transactionRoutes = express.Router()

transactionRoutes.get('/transactions', async (req, res) => {
    try {
        const transactions = await Transaction.find()
            .limit(50)
            .sort({ createdOn: -1 })
        res.status(200).json(transactions)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

export default transactionRoutes