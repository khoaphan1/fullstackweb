const Cart = require("../models/Cart");

class CartController {
  // [POST]: /api/blog/
  async create(req, res, next) {
    const newCart = new Cart(req.body);
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [PUT]: /api/blog/:id
  async update(req, res, next) {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [DELETE]: /api/blog/:id
  async delete(req, res, next) {
    try {
      const deleteCart = await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json(deleteCart);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [GET]: /api/blog/:id
  async getOne(req, res, next) {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [GET]: /api/blog/
  async getAll(req, res, next) {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new CartController();
