import { useState, useMemo } from "react";

const getRandomInteger = (max) => {
  return Math.floor(Math.random() * max);
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(() =>
    getRandomInteger(anecdotes.length)
  );
  const [points, setPoints] = useState(
    anecdotes.reduce(
      (accumulator, _, index) => ((accumulator[index] = 0), accumulator),
      {}
    )
  );
  const mostVotedAnecdoteIndex = useMemo(() => {
    console.log("Calculating most voted anecdotes..");
    let [mostPoint, mostPointIndex] = [-1, -1];

    for (const [key, value] of Object.entries(points)) {
      if (value > mostPoint) {
        mostPoint = value;
        mostPointIndex = key;
      }
    }

    return mostPointIndex;
  }, [points]);

  const handleNextAnecdote = () => {
    setSelected(getRandomInteger(anecdotes.length));
  };

  const handleVote = (index) => {
    setPoints((currentPoint) => {
      return { ...currentPoint, [index]: currentPoint[index] + 1 };
    });
  };

  return (
    <main>
      <section>
        <h1>Anecdote of the Day</h1>
        <p>{`"${anecdotes[selected]}"`}</p>
        <p>Vote : {points[selected]}</p>
      </section>

      <section>
        <button onClick={() => handleVote(selected)}>Vote</button>
        <button onClick={handleNextAnecdote}>Next Anecdote</button>
      </section>

      <section>
        <h1>Anecdotes with Most Votes</h1>
        <p>{`"${anecdotes[mostVotedAnecdoteIndex]}"`}</p>
      </section>
    </main>
  );
};

export default App;
