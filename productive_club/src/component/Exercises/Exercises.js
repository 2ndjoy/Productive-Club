import { faDumbbell, faFutbol } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Exercise from "../ExerciseCard/ExerciseCard";



const Exercises = () => {


  const [Exercisess, setExercisess] = useState([]);


  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExercisess(data));
  }, []);


  const handleAddToCart = (player) => {
    console.log(player);
    const newCart = [...cart, player];
    setCart(newCart);
  };


  return (
    <div >
      <div className="bg-gray-50">
        <div className="grid md:grid-cols-4 gap-4">
          <div className=" col-span-3 p-10">
            <div>
              <h1 className="text-left text-7xl font-bold text-purple-500 mt-7">
                <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                Productive's Club
              </h1>
              <h1 className="text-left text-3xl my-12">
                Select what you want to do today
              </h1>
            </div>
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-20">
              {Exercisess.map((player) => (
                <Exercise
                  player={player}
                  handleAddToCart={handleAddToCart}
                ></Exercise>
              ))}
            </div>
          </div>

          <div className="col-span-1 bg-gray-100">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
