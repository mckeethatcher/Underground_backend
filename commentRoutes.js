const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const auth = require('../middleware/auth');
const mongoose = require('mongoose');


router.post('/comments', auth, async (req, res) => {
  try {
    const { artistId, comment } = req.body;

    const newComment = await Comment.create({
      artistId,
      comment,
      author: req.user.id
    });

    await User.findByIdAndUpdate(req.user.id, { $push: { comments: newComment._id } });

    res.status(201).json({ message: 'Comment created', comment: newComment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
