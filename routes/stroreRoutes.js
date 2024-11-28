const express = require("express");
const router = express.Router();
const { addStore,getStoreDetails, listStores, updateStore } = require("../controllers/storeController");
const authMiddleware = require("../middelware/authMiddelware");


router.post("/store/add",authMiddleware,addStore)
router.get("/store", authMiddleware,getStoreDetails);
router.post("/store", authMiddleware,listStores);
router.patch("/store", authMiddleware,updateStore);

module.exports = router;
