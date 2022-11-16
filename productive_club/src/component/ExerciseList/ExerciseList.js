import React, { useEffect, useState } from "react";
import Exercise from "../ExerciseCard/ExerciseCard";

const Exercises = () => {
  const [Exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
  return (
    <div >

      {Exercises.map((player) => (
        <Exercise player={player}></Exercise>
      ))}
    </div>
  );
};

export default Exercises;
