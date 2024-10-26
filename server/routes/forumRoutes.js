const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
  createForumTopic,
  getForumTopics,
  addComment,
  replyToComment,
} = require('../controllers/forumController');

const router = express.Router();

// Route to create a new forum topic for a course
router.post('/', protect, createForumTopic);

// Route to get all forum topics for a specific course
router.get('/:courseId', protect, getForumTopics);

// Route to add a comment to a forum topic
router.post('/:discussionId/comment', protect, addComment);

// Route to reply to a comment in a forum topic
router.post('/:discussionId/comment/:commentId/reply', protect, replyToComment);

module.exports = router;


