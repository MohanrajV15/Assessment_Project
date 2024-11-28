const express = require("express");
const router = express.Router();
const { listCategories, addcategory } = require("../controllers/categoryController");
const authMiddleware = require("../middelware/authMiddelware");

router.post("/product-category/add", authMiddleware, addcategory);
router.post("/product-category/list", authMiddleware, listCategories);

module.exports = router;
