import { useState } from "react";

function Statistics(props) {
  const getAll = () => props.good + props.bad + props.neutral;
  const getAverageFeedback = () => (props.good - props.bad) / getAll();
  const getPositivePercentage = () => (props.good / getAll()) * 100;

  return (
    <>
      <h2>Statistics</h2>
      {getAll() ? (
        <>
          <p>Good {props.good}</p>
          <p>Neutral {props.neutral}</p>
          <p>Bad {props.bad}</p>
          <p>All {getAll()}</p>
          <p>Average {getAverageFeedback()}</p>
          <p>Positive {getPositivePercentage()}%</p>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
}

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  return (
    <>
      <h1>Give feedback</h1>
      <button
        onClick={() => {
          setGood(good + 1);
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
        }}
      >
        Bad
      </button>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
}

export default App;
