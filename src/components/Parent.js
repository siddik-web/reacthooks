import React from "react";
import Child from "./Child";

function Parent({ setUsername }) {
  return (
    <>
      <div>Parent</div>
      <Child setUsername={setUsername} />
    </>
  );
}

export default Parent;
