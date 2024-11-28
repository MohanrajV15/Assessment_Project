const express = require("express");
const router = express.Router();
const { listProducts, addProduct, addStock, removeStock, inventoryList } = require("../controllers/productController");
const authMiddleware = require("../middelware/authMiddelware");

router.get("/products", authMiddleware, listProducts);
router.post("/products", authMiddleware, addProduct);
router.post("/add-stock", authMiddleware, addStock);
router.post("/remove-stock", authMiddleware, removeStock);
router.post("/inventory/list", authMiddleware, inventoryList);

module.exports = router;
