const Category = require("../models/Category");

class CategoryController {
  // [POST]: /api/category/
  async create(req, res, next) {
    const newCategory = new Category(req.body);
    try {
      const savedCategory = await newCategory.save();
      res.status(200).json(savedCategory);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [PUT]: /api/category/:id
  async update(req, res, next) {
    try {
      const updateCategory = await Category.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateCategory);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [DELETE]: /api/category/:id
  async delete(req, res, next) {
    try{
      const deleteCategory = await Category.findByIdAndDelete(req.params.id);
      res.status(200).json(deleteCategory)
    }catch (err) {
      res.status(500).json(err);
    }
  }

  // [GET]: /api/category/:id
  async getOne(req, res, next) {
    try {
      const category = await Category.findById(req.params.id)
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET]: /api/category/
  async getAll(req, res, next) {
    try {
      const Categorys = await Category.find()
      res.status(200).json(Categorys);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new CategoryController();
