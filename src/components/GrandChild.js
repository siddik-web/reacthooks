import React from "react";

function GrandChild({ setUsername }) {
  return (
    <>
      <p>GrandChild</p>
      <input
        type="text"
        name="name"
        onChange={(e) => {
          e.preventDefault();
          setUsername(e.target.value);
        }}
      />
    </>
  );
}

export default GrandChild;
