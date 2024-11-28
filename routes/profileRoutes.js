const express = require("express");
const router = express.Router();
const { getProfile, updateProfile } = require("../controllers/profileController");
const authMiddleware = require("../middelware/authMiddelware");

router.get("/profile",authMiddleware, getProfile);
router.patch("/profile", authMiddleware,updateProfile);

module.exports = router;