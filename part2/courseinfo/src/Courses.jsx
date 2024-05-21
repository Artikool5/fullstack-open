function Header(props) {
  return <h2>{props.course}</h2>;
}

function Part(props) {
  return (
    <p>
      {props.part} {props.excercises}
    </p>
  );
}

function Content({ parts }) {
  return (
    <>
      {parts.map((part) => {
        return (
          <Part key={part.id} part={part.name} excercises={part.excercises} />
        );
      })}
    </>
  );
}

function Total({ parts }) {
  const total = parts.reduce((acc, cur) => acc + cur.excercises, 0);
  return <p>Number of excercises {total} </p>;
}

function Course({ course }) {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
}

function Courses({ courses }) {
  return (
    <>
      {courses.map((course) => {
        return <Course key={course.id} course={course} />;
      })}
    </>
  );
}

export default Courses;
