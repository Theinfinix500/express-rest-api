const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ result: posts });
  } catch (error) {
    res.status(500).json({ message: err });
  }
});

router.get('/:postId', async (req, res) => {
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);
    res.status(200).json({ result: post });
  } catch (error) {
    res.status(500).json({ message: err });
  }
});

router.patch('/:postId', async (req, res) => {
  const postId = req.params.postId;
  const postTitle = req.body.title;

  try {
    const removedPost = await Post.updateOne(
      { _id: postId },
      { $set: { title: postTitle } }
    );
    res.status(200).json({ result: removedPost });
  } catch (error) {
    res.status(500).json({ message: err });
  }
});

router.delete('/:postId', async (req, res) => {
  const postId = req.params.postId;

  try {
    const removedPost = await Post.deleteOne({ _id: postId });
    res.status(200).json({ result: removedPost });
  } catch (error) {
    res.status(500).json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.status(200).json({ result: savedPost, message: 'OK' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
