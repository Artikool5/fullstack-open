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
  const part1 = "Fundamentals of React";
  const excercises1 = 10;
  const part2 = "Using props to pass data";
  const excercises2 = 7;
  const part3 = "State of a component";
  const excercises3 = 14;
  const parts = [
    { name: part1, excercises: excercises1 },
    { name: part2, excercises: excercises2 },
    { name: part3, excercises: excercises3 },
  ];
  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total excercises={[excercises1, excercises2, excercises3]} />
    </>
  );
}

export default App;
