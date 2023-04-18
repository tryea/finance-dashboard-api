// productRoutes
import express from "express"
import Product from "../models/Product.js"

const productRoutes = express.Router()

productRoutes.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

export default productRoutes