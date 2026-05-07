const courses = [
  "AI",
  "Funding",
  "Branding",
  "Cybersecurity",
  "Website Design"
];

function Courses() {
  return (
    <div className="container">
      <h1>Founder Academy</h1>

      {courses.map((course, i) => (
        <div className="card" key={i}>
          <h3>{course}</h3>
          <button>Start Course</button>
        </div>
      ))}
    </div>
  );
}

export default Courses;
