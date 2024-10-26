const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');

const router = express.Router();

// Route to create a course (requires JWT authentication)
router.post('/', protect, createCourse);

// Route to get all courses
router.get('/', protect, getCourses);

// Route to get a single course by ID
router.get('/:courseId', protect, getCourseById);

// Route to update a course
router.put('/:courseId', protect, updateCourse);

// Route to delete a course
router.delete('/:courseId', protect, deleteCourse);

module.exports = router;

