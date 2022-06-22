const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const UserController = require("../controllers/userControllers");

router.post("/",verifyTokenAndAdmin, UserController.create);
router.put("/:id",verifyTokenAndAdmin, UserController.update);
router.delete("/:id",verifyTokenAndAdmin, UserController.delete);
router.get("/:id", UserController.getOne);
router.get("/", UserController.getAll);

module.exports = router;
