import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import StudentForm from "./Components/StudentForm";
import StudentList from "./Components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError("");
      
   const res = await axios.get(
  "https://student-management-api-lpp1.onrender.com/students"
);
      setStudents(res.data);
    } catch (err) {
      setError("Failed to load students");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(
  `https://student-management-api-lpp1.onrender.com/students/${id}`
);

      alert("Student Deleted");
      fetchStudents();
    } catch (error) {
      alert("Failed To Delete Student");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <StudentForm fetchStudents={fetchStudents} />

      {loading && <h2>Loading Students...</h2>}

      {error && <h2>{error}</h2>}

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;