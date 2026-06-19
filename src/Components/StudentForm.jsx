import { useState } from "react";
import axios from "axios";

function StudentForm({ fetchStudents }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://student-management-api-lpp1.onrender.com/students",
        student
      );

      alert("Student Added Successfully");

      setStudent({
        name: "",
        email: "",
        course: "",
      });

      fetchStudents();
    } catch (error) {
      alert("Failed To Add Student");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={student.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={student.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;