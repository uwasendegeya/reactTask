
import React, { useState } from 'react';
import './mycss.css';

function Test() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container"> 
      <button className="counter-button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <span className="counter-value">{count}</span> 
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Test;