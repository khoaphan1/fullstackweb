const Product = require("../models/Product");

class ProductController {
  // [POST]: /api/product/
  async create(req, res, next) {
    const newProduct = new Product(req.body);
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [PUT]: /api/product/:id
  async update(req, res, next) {
    try {
      const updateProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [DELETE]: /api/product/:id
  async delete(req, res, next) {
    try{
       const deleteProduct = await Product.findByIdAndDelete(req.params.id);
      res.status(200).json(deleteProduct)
    }catch (err) {
      res.status(500).json(err);
    }
  }

  // [GET]: /api/product/:id
  async getOne(req, res, next) {
    try {
      const product = await Product.findById(req.params.id)
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET]: /api/product/
  async getAll(req, res, next) {
    try {
      const Products = await Product.find()
      res.status(200).json(Products);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new ProductController();
