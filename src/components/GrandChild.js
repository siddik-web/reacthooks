import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function GrandChild() {
  const { setUsername } = useContext(AppContext);
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
