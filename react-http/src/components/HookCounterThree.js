import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        value={name.firstname}
        onChange={(e) => setName({ ...name, firstname: e.target.value })}
      />
      <input
        type="text"
        placeholder="last Name"
        value={name.lastname}
        onChange={(e) => setName({ ...name, lastname: e.target.value })}
      />
      <h2>Your First Name - {name.firstname}</h2>
      <h2>Your Last Name - {name.lastname}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}

export default HookCounterThree;
