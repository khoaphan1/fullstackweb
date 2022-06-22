const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const CartController = require("../controllers/cartControllers");

router.post("/",verifyToken, CartController.create);
router.put("/:id",verifyTokenAndAuthorization, CartController.update);
router.delete("/:id",verifyTokenAndAuthorization, CartController.delete);
router.get("/find/:userId",verifyTokenAndAuthorization, CartController.getOne);
router.get("/",verifyTokenAndAdmin, CartController.getAll);

module.exports = router;
