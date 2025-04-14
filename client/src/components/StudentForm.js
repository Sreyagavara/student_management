import React, { useState, useEffect } from 'react';
import { addStudent, updateStudent } from '../services/studentService';

const StudentForm = ({ onAdd, editStudent, onUpdate, cancelEdit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });

  useEffect(() => {
    if (editStudent) {
      setFormData({
        name: editStudent.name,
        email: editStudent.email,
        age: editStudent.age,
      });
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editStudent) {
      const res = await updateStudent(editStudent._id, formData);
      onUpdate(res.data);
    } else {
      const res = await addStudent(formData);
      onAdd(res.data);
    }

    setFormData({ name: '', email: '', age: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editStudent ? 'Edit Student' : 'Add Student'}</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
      <button type="submit">{editStudent ? 'Update' : 'Add'}</button>
      {editStudent && <button onClick={cancelEdit}>Cancel</button>}
    </form>
  );
};

export default StudentForm;
