import React, { useEffect, useState } from 'react';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import { getStudents } from './services/studentService';



function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  // Load students from backend when app starts
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (err) {
      console.error('Error fetching students:', err);
    }
  };

  // When a new student is added
  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };
  const handleEditStudent = (student) => {
    setEditStudent(student);
  };
  
  const handleUpdateStudent = (updatedStudent) => {
    setStudents(
      students.map((s) => (s._id === updatedStudent._id ? updatedStudent : s))
    );
    setEditStudent(null);
  };
  
  const cancelEdit = () => {
    setEditStudent(null);
  };
  

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((s) => s._id !== id));
  };
  
  return (
    <div className="App">
      <StudentForm
        onAdd={handleAddStudent}
        editStudent={editStudent}
        onUpdate={handleUpdateStudent}
        cancelEdit={cancelEdit}
      />
  
      <StudentList
        students={students}
        onDelete={handleDeleteStudent}
        onEdit={handleEditStudent}
      />
    </div>
  );
  

}

export default App;

