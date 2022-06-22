const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const CommentController = require("../controllers/commentControllers");

router.post("/", CommentController.create);
router.put("/:id",verifyTokenAndAdmin, CommentController.update);
router.delete("/:id",verifyTokenAndAdmin, CommentController.delete);
router.get("/:id", CommentController.getOne);
router.get("/", CommentController.getAll);

module.exports = router;