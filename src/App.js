import { useState } from "react";

function App() {
  const [count, setCount] = useState(() => {
    console.log("run");
    return 4;
  });

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
