const Blog = require("../models/Blogs");

class BlogController {
  // [POST]: /api/blog/
  async create(req, res, next) {
    const newBlog = new Blog(req.body);
    try {
      const savedBlog = await newBlog.save();
      res.status(200).json(savedBlog);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [PUT]: /api/blog/:id
  async update(req, res, next) {
    try {
      const updateBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateBlog);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [DELETE]: /api/blog/:id
  async delete(req, res, next) {
    try{
      const deleteBlog = await Blog.findByIdAndDelete(req.params.id);
      res.status(200).json(deleteBlog)
    }catch (err) {
      res.status(500).json(err);
    }
  }

  // [GET]: /api/blog/:id
  async getOne(req, res, next) {
    try {
      const blog = await Blog.findById(req.params.id)
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET]: /api/blog/
  async getAll(req, res, next) {
    try {
      const blogs = await Blog.find()
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new BlogController();
