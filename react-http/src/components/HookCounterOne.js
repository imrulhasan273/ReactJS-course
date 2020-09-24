import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterOne;
