const Comment = require("../models/Comment");

class CommentController {
  // [POST]: /api/comment/
  async create(req, res, next) {
    const newComment = new Comment(req.body);
    try {
      const savedComment = await newComment.save();
      res.status(200).json(savedComment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [PUT]: /api/comment/:id
  async update(req, res, next) {
    try {
      const updateComment = await Comment.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updateComment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // [DELETE]: /api/comment/:id
  async delete(req, res, next) {
    try{
      const deleteCmt = await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json(deleteCmt)
    }catch (err) {
      res.status(500).json(err);
    }
  }

  // [GET]: /api/comment/:id
  async getOne(req, res, next) {
    try {
      const comment = await Comment.findById(req.params.id)
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET]: /api/comment/
  async getAll(req, res, next) {
    try {
      const Comments = await Comment.find()
      res.status(200).json(Comments);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new CommentController();
