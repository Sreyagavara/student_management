import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/students'; // Your backend route

// Create student
export const addStudent = async (studentData) => {
  return await axios.post(`${API_BASE}/add`, studentData);
};

// Get all students
export const getStudents = async () => {
  return await axios.get(API_BASE);
};

// Get student by ID (optional)
export const getStudentById = async (id) => {
  return await axios.get(`${API_BASE}/${id}`);
};

// Delete student by ID (optional)
export const deleteStudent = async (id) => {
  return await axios.delete(`${API_BASE}/${id}`);
};
export const updateStudent = async (id, updatedData) => {
    return await axios.put(`${API_BASE}/${id}`, updatedData);
  };
  