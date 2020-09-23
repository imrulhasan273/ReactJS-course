import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount); //here count = 0, and setCount will change it

  const increamentFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <br />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increament
      </button>
      <br />
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decreament
      </button>
      <br />
      <button onClick={increamentFive}>Increament 5</button>
    </div>
  );
}

export default HookCounterTwo;
