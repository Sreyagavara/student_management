const Student = require('../models/Student');

// CREATE a student
const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ all students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ a single student
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE a student
const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedStudent);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
};

// UPDATE a student
const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update student' });
  }
};

// SEARCH student by name
const searchStudentByName = async (req, res) => {
  try {
    const students = await Student.find({ name: req.params.name });
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: 'Failed to search student' });
  }
};


// ✅ EXPORT all functions correctly
module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  deleteStudent,
  updateStudent,
  searchStudentByName
};