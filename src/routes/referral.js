const express = require("express");
const router = express.Router();
const { trackReferral } = require("../controllers/referralController");
const authMiddleware = require("../middleware/auth");

router.get("/stats", authMiddleware, trackReferral);

module.exports = router;