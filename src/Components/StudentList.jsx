function StudentList({ students, deleteStudent }) {
  return (
    <>
      <h2 className="student-heading">
        Student List
      </h2>

      <div className="student-grid">
        {students.map((student) => (
          <div className="student-card" key={student._id}>
            <h3>{student.name}</h3>
            <p>{student.email}</p>
            <p>{student.course}</p>

            <button
              className="delete-btn"
              onClick={() => deleteStudent(student._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default StudentList;