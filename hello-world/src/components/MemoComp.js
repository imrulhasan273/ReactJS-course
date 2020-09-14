import React from "react";

function MemoComp({ name }) {
  console.log("Renduring Memo Component");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
