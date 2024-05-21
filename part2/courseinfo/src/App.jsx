function Header(props) {
  return <h1>{props.course}</h1>;
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

function App() {
  const course = {
    id: 1,
    name: "Half stack application development",
    parts: [
      { name: "Fundamentals of React", excercises: 10, id: 1 },
      { name: "Using props to pass data", excercises: 7, id: 2 },
      { name: "State of a component", excercises: 14, id: 3 },
    ],
  };
  return <Course course={course} />;
}

export default App;
