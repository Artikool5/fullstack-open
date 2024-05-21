import Courses from "./Courses";

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
