import React from 'react';
import Exercise from '../Exercise/Exercise';
import Info from '../PersonalInfo/Info';
import './Cart.css'

const Cart = ({ cart }) => {
  console.log(cart)
  let totalTime = 0;
  for (const time of cart) {
    totalTime = parseInt(totalTime + time.minute);
  }
  return (
    <div className="player-container">

      <h1><b>Selected Exercises : {cart.length}</b></h1>
      <p><b>Duration: {totalTime}</b></p>
      <Info></Info>
      <Exercise time={totalTime}></Exercise>

    </div>
  );
};

export default Cart;