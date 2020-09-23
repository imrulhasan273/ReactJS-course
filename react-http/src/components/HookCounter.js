import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0); //here count = 0, and setCount will change it
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
