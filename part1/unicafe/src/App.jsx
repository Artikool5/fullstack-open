import { useState } from "react";

function StatisticsLine({ children, value }) {
  return (
    <tr>
      <td>{children}</td>
      <td>{value}</td>
    </tr>
  );
}

function Statistics(props) {
  const getAll = () => props.good + props.bad + props.neutral;
  const getAverageFeedback = () => (props.good - props.bad) / getAll();
  const getPositivePercentage = () => (props.good / getAll()) * 100;

  return (
    <>
      <h2>Statistics</h2>
      {getAll() ? (
        <table>
          <tbody>
            <StatisticsLine value={props.good}>Good</StatisticsLine>
            <StatisticsLine value={props.neutral}>Neutral</StatisticsLine>
            <StatisticsLine value={props.bad}>Bad</StatisticsLine>
            <StatisticsLine value={getAll()}>All</StatisticsLine>
            <StatisticsLine value={getAverageFeedback()}>
              Average
            </StatisticsLine>
            <StatisticsLine value={getPositivePercentage()}>
              Positive
            </StatisticsLine>
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  return (
    <>
      <h1>Give feedback</h1>
      <Button
        onClick={() => {
          setGood(good + 1);
        }}
      >
        Good
      </Button>
      <Button
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      >
        Neutral
      </Button>
      <Button
        onClick={() => {
          setBad(bad + 1);
        }}
      >
        Bad
      </Button>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
}

export default App;
