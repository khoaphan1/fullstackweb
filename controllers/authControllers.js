const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

class AuthController {
  // [POST]: /api/auth/register
  async register(req, res, next) {
    const newUser = new User({
      username: req.body.username,
      email: req.body.username,
      //mã hóa mật khẩu của người dùng
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
      firtName: req.body.firtName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      sex: req.body.sex,
      avatar: req.body.avatar,
    });

    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [POST]: /api/auth/login
  async login(req, res, next) {
    try {
      const user = await User.findOne({
        username: req.body.username,
      });

      // kiểm tra user có trong database hay không?
      !user &&  res.status(401).json("Wrong User Name");

      // giải mã mật khẩu của người dùng
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
      );
      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

      originalPassword !== req.body.password &&
         res.status(401).json("Wrong Password");
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
      );

      return res.status(200).json({ user, accessToken });
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async update(req, res, next) {

    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new AuthController();
