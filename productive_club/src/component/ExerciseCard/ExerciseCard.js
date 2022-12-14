import React from "react";
import './ExerciseCard.css'

const Exercise = (props) => {
  // const { handleAddToCart } = props;
  const { name, description, img, minute } = props.player;

  return (
    <div>
      {/* card starts */}
      <div className="card card-compact w-96 bg-base-100 shadow-2xl">
        <figure>
          <img src={img} alt="" className="imgg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-left">{description}</p>
          <p className="text-start my-3">Duration: {minute}</p>
          <button
            onClick={() => props.handleAddToCart(props.player)}
            className="btn btn-primary hover:btn-blue-500"
          >
            Add to list
          </button>
        </div>
      </div>
      {/* card ends */}
    </div>
  );
};

export default Exercise;
