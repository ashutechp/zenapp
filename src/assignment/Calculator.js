import React, { useState } from 'react';

export const Calculator = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  return (
    <div>
      Calculator
      <label for="firstNum">Enter First Number</label>
      <input
        type="number"
        name="firstNum"
        placeholder="Enter first Number"
        onChange={(e) => setFirstNum(e.target.value)}
      />
      <br />
      <label for="secondNum">Enter Second Number</label>
      <input
        type="number"
        name="secondNum"
        placeholder="Enter Second Number"
        onChange={(e) => setSecondNum(e.target.value)}
      />
      <input type="submit" />
     
    </div>
  );
};
