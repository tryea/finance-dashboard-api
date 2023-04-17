import express from "express"
import KPI from "../models/KPI.js"

const kpiRoutes = express.Router()

kpiRoutes.get('/kpis', async (req, res) => {
    try {
        const kpis = await KPI.find()
        res.status(200).json(kpis)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

export default kpiRoutes