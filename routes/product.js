const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const ProductController = require("../controllers/productControllers");

router.post("/", ProductController.create);
router.put("/:id",verifyTokenAndAdmin, ProductController.update);
router.delete("/:id",verifyTokenAndAdmin, ProductController.delete);
router.get("/find/:id", ProductController.getOne);
router.get("/", ProductController.getAll);

module.exports = router;
