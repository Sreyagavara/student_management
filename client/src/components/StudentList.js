import React from 'react';
import { deleteStudent } from '../services/studentService';

const StudentList = ({ students, onDelete, onEdit }) => {
  const handleDelete = async (id) => {
    await deleteStudent(id);
    onDelete(id);
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} - {student.email} - {student.age}
            <button onClick={() => onEdit(student)}>✏️ Edit</button>
            <button onClick={() => handleDelete(student._id)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
