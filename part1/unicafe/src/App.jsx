import { useState } from "react";

const Button = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick} role="button">
        {text}
      </button>
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total > 0 ? (good - bad) / total : 0;
  const positiveFeedback = total > 0 ? (good / total) * 100 : 0;

  return (
    <section>
      <h1>Statistics</h1>
      <div>
        {total === 0 ? (
          "No feedbacks given."
        ) : (
          <table>
            <tbody>
              <StatisticLine text={"Good"} value={good}></StatisticLine>
              <StatisticLine text={"Neutral"} value={neutral}></StatisticLine>
              <StatisticLine text={"Bad"} value={bad}></StatisticLine>
              <StatisticLine text={"Total"} value={total}></StatisticLine>
              <StatisticLine text={"Average"} value={average}></StatisticLine>
              <StatisticLine
                text={"Positive Feedback"}
                value={`${positiveFeedback}%`}
              ></StatisticLine>
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <main>
      <section>
        <h1>Give Feedback</h1>
        <div>
          <Button
            text={"good"}
            onClick={() => setGood((currentGood) => currentGood + 1)}
          ></Button>
          <Button
            text={"neutral"}
            onClick={() => setNeutral((currentNeutral) => currentNeutral + 1)}
          ></Button>
          <Button
            text={"bad"}
            onClick={() => setBad((currentBad) => currentBad + 1)}
          ></Button>
        </div>
      </section>

      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </main>
  );
};

export default App;
