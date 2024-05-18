import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const getAll = () => good + bad + neutral;
  const getAverageFeedback = () => (good - bad) / getAll();
  const getPositivePercentage = () => (good / getAll()) * 100;

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
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {getAll()}</p>
      <p>Average {getAverageFeedback()}</p>
      <p>Positive {getPositivePercentage()}%</p>
    </>
  );
}

export default App;
