const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const BlogController = require("../controllers/blogControllers");

router.post("/",verifyTokenAndAdmin, BlogController.create);
router.put("/:id",verifyTokenAndAdmin, BlogController.update);
router.delete("/:id",verifyTokenAndAdmin, BlogController.delete);
router.get("/:id", BlogController.getOne);
router.get("/", BlogController.getAll);

module.exports = router;
