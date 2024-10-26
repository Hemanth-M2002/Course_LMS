const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: String,
  duration: String,
  category: String,
  chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }],
});

module.exports = mongoose.model('Course', courseSchema);
