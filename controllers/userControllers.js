const User = require("../models/User");

class UserController {
  // [POST]: /api/User/
  async create(req, res, next) {
    const newUser = new User(req.body);
    try {
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [PUT]: /api/User/:id
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

  // [DELETE]: /api/User/:id
  async delete(req, res, next) {
    try{
      const deleteUser = await User.findByIdAndDelete(req.params.id);
      res.status(200).json(deleteUser)
    }catch (err) {
      res.status(500).json(err);
    }
  }

  // [GET]: /api/User/:id
  async getOne(req, res, next) {
    try {
      const User = await User.findById(req.params.id)
      res.status(200).json(User);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET]: /api/User/
  async getAll(req, res, next) {
    try {
      const Users = await User.find()
      res.status(200).json(Users);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new UserController();
