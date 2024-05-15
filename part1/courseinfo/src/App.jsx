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
      <Part part={parts[0].name} excercises={parts[0].excercises} />
      <Part part={parts[1].name} excercises={parts[1].excercises} />
      <Part part={parts[2].name} excercises={parts[2].excercises} />
    </>
  );
}

function Total(props) {
  const excercises = props.excercises.reduce(
    (previous, current) => previous + current,
    0,
  );
  return <p>Number of excercises {excercises}</p>;
}

function App() {
  const course = "Half stack application development";
  const parts = [
    { name: "Fundamentals of React", excercises: 10 },
    { name: "Using props to pass data", excercises: 7 },
    { name: "State of a component", excercises: 14 },
  ];
  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total
        excercises={[
          parts[0].excercises,
          parts[1].excercises,
          parts[2].excercises,
        ]}
      />
    </>
  );
}

export default App;
