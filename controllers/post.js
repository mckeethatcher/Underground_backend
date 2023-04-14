const Post = require("../models/postSchema")

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.status(200).json({
      posts,
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

const createPost = async (req, res) => {
  try {
    const post = new Post(req.body)
    await post.save()
    return res.status(201).json({
      post,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(post)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const mongoose = require('mongoose');

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid post ID');
    }
    const deleted = await Post.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send(`Post cancelled!`);
    } 
    throw new Error("Post not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost
}