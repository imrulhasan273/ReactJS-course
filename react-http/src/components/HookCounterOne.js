import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const initialState = 0;
  const initialName = "";
  const [count, setCount] = useState(initialState);
  const [name, setName] = useState(initialName);

  useEffect(() => {
    console.log("Use Effect: Updating Document Title");
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterOne;
