const express = require("express");
const router = express.Router();

const { getSneakers } = require("../controllers/sneakerController");
// const { protect } = require("../middleware/authMiddleware");

router.get("/",  getSneakers);

module.exports = router;
