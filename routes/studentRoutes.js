const express = require('express');
const router = express.Router();

const {
  createStudent,
  getStudents,
  getStudentById,
  deleteStudent,
  updateStudent,
  searchStudentByName // ✅ You must include this
} = require('../controllers/studentController'); // 👈 Make sure it's spelled correctly and the file exists

// CREATE a new student
router.post('/add', createStudent);

// READ all students
router.get('/', getStudents);

// 🔍 SEARCH by name (must come before :id)
router.get('/search/name/:name', searchStudentByName);

// READ a student by ID
router.get('/:id', getStudentById);

// UPDATE a student
router.put('/:id', updateStudent);

// DELETE a student
router.delete('/:id', deleteStudent);

module.exports = router;
