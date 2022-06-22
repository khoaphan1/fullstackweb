const Order = require("../models/Order");

class OrderController {
  // [POST]: /api/order/
  async create(req, res, next) {
    const newOrder = new Order(req.body);
    try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [PUT]: /api/order/:id
  async update(req, res, next) {
    try {
      const updateOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [DELETE]: /api/order/:id
  async delete(req, res, next) {
    try{
      const deleteOrder =await Order.findByIdAndDelete(req.params.id);
      res.status(200).json(deleteOrder)
    }catch (err) {
      res.status(500).json(err);
    }
  }

  // [GET]: /api/order/:id
  async getOne(req, res, next) {
    try {
      const Order = await Order.findOne({userId: req.params.userId})
      res.status(200).json(Order);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET]: /api/order/
  async getAll(req, res, next) {
    try {
      const Orders = await Order.find()
      res.status(200).json(Orders);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new OrderController();
