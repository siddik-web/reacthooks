import React from "react";
import GrandChild from "./GrandChild";

function Child({ setUsername }) {
  return (
    <>
      <div>Child</div>
      <GrandChild setUsername={setUsername} />
    </>
  );
}

export default Child;
