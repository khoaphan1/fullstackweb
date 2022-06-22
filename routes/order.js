const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const OrderController = require("../controllers/orderControllers");

router.post("/",verifyToken, OrderController.create);
router.put("/:id",verifyTokenAndAdmin, OrderController.update);
router.delete("/:id",verifyTokenAndAdmin, OrderController.delete);
router.get("/:id", OrderController.getOne);
router.get("/", OrderController.getAll);

module.exports = router;
