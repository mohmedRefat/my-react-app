import PropTypes from "prop-types";
function Student(props) {
  const { name, age, grade, isStudent } = props;

  const displayName = name && String(name).trim() ? name : "Unknown";
  const displayAge = Number.isFinite(age) ? age : 0;
  const displayGrade = grade && String(grade).trim() ? grade : "Not Assigned";
  const displayIsStudent = typeof isStudent === "boolean" ? isStudent : false;

  return (
    <div className="student">
      <h2>{displayName}</h2>
      <p>Age: {displayAge}</p>
      <p>Grade: {displayGrade}</p>
      <p>Student: {displayIsStudent ? "Yes" : "No"}</p>
    </div>
  );
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  grade: PropTypes.string,
  isStudent: PropTypes.bool,
};
Student.defaultProps = {
  name: "Unknown",
  age: 0,
  grade: "Not Assigned",
  isStudent: false,
};

export default Student;
