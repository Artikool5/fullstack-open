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
    <section>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </section>
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

function App() {
  const courses = [
    {
      id: 1,
      name: "Half stack application development",
      parts: [
        { name: "Fundamentals of React", excercises: 10, id: 1 },
        { name: "Using props to pass data", excercises: 7, id: 2 },
        { name: "State of a component", excercises: 14, id: 3 },
      ],
    },
    {
      id: 2,
      name: "Node.js",
      parts: [
        { name: "Routing", excercises: 4, id: 1 },
        { name: "Middleware", excercises: 7, id: 2 },
      ],
    },
  ];
  return (
    <>
      <h1>Web development curriculum</h1>
      <Courses courses={courses} />
    </>
  );
}

export default App;
