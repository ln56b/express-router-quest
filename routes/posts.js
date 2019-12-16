const express = require('express');
const fakePosts = require('../data/posts');
const comments = require('./comments');

const router = express.Router();

// Get a list of posts
router.get('/', (req, res) => {
  res.json(fakePosts);
});


// Get a single post
router.get('/:id', (req, res) => {
  const postId = Number(req.params.id);
  const foundPost = fakePosts.find((post) => post.id === postId);
  if (!foundPost) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }
  return res.json(foundPost);
});


router.use('/:postId/comments', comments);

module.exports = router;
