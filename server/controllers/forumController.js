const Forum = require('../models/Forum');
const User = require('../models/User'); // Assuming User model for user info

// Create a new forum topic
const createForumTopic = async (req, res) => {
  try {
    const { courseId, title, content } = req.body;
    const newTopic = await Forum.create({
      courseId,
      title,
      content,
      comments: [],
      createdBy: req.user._id,
    });
    res.status(201).json(newTopic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all forum topics for a course
const getForumTopics = async (req, res) => {
  try {
    const { courseId } = req.params;
    const topics = await Forum.find({ courseId });
    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a comment to a forum topic
const addComment = async (req, res) => {
  try {
    const { discussionId } = req.params;
    const { content } = req.body;
    const comment = { content, createdBy: req.user._id, replies: [], likes: [] };

    const updatedTopic = await Forum.findByIdAndUpdate(
      discussionId,
      { $push: { comments: comment } },
      { new: true }
    );

    res.status(201).json(updatedTopic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Reply to a comment in a forum topic
const replyToComment = async (req, res) => {
  try {
    const { discussionId, commentId } = req.params;
    const { content } = req.body;

    const reply = { content, createdBy: req.user._id, likes: [] };

    const updatedTopic = await Forum.findOneAndUpdate(
      { _id: discussionId, "comments._id": commentId },
      { $push: { "comments.$.replies": reply } },
      { new: true }
    );

    res.status(201).json(updatedTopic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Toggle like/unlike for a post, comment, or reply
const toggleLike = async (req, res) => {
  try {
    const { discussionId, commentId, replyId } = req.params;
    const userId = req.user._id;

    let updatedItem;

    if (replyId) {
      // Like/unlike a reply
      updatedItem = await Forum.findOneAndUpdate(
        { _id: discussionId, "comments._id": commentId, "comments.replies._id": replyId },
        {
          $addToSet: { "comments.$[comment].replies.$[reply].likes": userId },
        },
        { arrayFilters: [{ "comment._id": commentId }, { "reply._id": replyId }], new: true }
      );
    } else if (commentId) {
      // Like/unlike a comment
      updatedItem = await Forum.findOneAndUpdate(
        { _id: discussionId, "comments._id": commentId },
        {
          $addToSet: { "comments.$.likes": userId },
        },
        { new: true }
      );
    } else {
      // Like/unlike a topic
      updatedItem = await Forum.findByIdAndUpdate(
        discussionId,
        {
          $addToSet: { likes: userId },
        },
        { new: true }
      );
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createForumTopic,
  getForumTopics,
  addComment,
  replyToComment,
  toggleLike,
};
