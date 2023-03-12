import React from 'react';

export const Square = (props) => {
  let result = props.no * props.no;

  return (
    <div>
      The result of the square of {props.no} is {result}
      the sudent name is {props.student.name}
      <button onClick={props.func}>Greet</button>
      <button
        onClick={() => {
          props.set(10);
        }}
      >
        Set the Value
      </button>
    </div>
  );
};
