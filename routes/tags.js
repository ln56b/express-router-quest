const express = require('express');
const fakePosts = require('../data/posts');
const tags = require('../data/tags');

const router = express.Router();


// Get a list of tags
router.get('/', (req, res) => {
  res.json(tags);
});

// Get a simple tag
router.get('/:id', (req, res) => {
  const tagId = Number(req.params.id);
  const foundTag = tags.find((tag) => tag.id === tagId);
  if (!foundTag) {
    return res.status(404).json({
      error: 'Tag not found',
    });
  }
  return res.json(foundTag);
});

// Get all posts linked to a spectific tag
router.get('/:tagId/posts', (req, res) => {
  const tagId = Number(req.params.tagId);
  const foundTag = tags.find((tag) => tag.id === tagId);
  if (!foundTag) {
    return res.status(404).json({
      error: 'Tag not found',
    });
  }
  const filteredPosts = fakePosts.filter((post) => post.tag_ids.includes(tagId));
  res.json(filteredPosts);
});

module.exports = router;
