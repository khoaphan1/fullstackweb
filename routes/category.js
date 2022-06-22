const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const CategoryController = require("../controllers/categoryControllers");

router.post("/",verifyTokenAndAdmin, CategoryController.create);
router.put("/:id",verifyTokenAndAdmin, CategoryController.update);
router.delete("/:id",verifyTokenAndAdmin, CategoryController.delete);
router.get("/:id", CategoryController.getOne);
router.get("/", CategoryController.getAll);

module.exports = router;
