const express = require("express")
const router = express.Router()

const authController = require('../controllers/authControllers')
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.put("/edit/:id",verifyTokenAndAuthorization, authController.update);

module.exports = router;