import { useState } from "react";
import Parent from "./components/Parent";

function App() {
  const [username, setUsername] = useState("Md Siddiqur Rahman");

  return (
    <div className="container">
      <Parent setUsername={setUsername} />
      <h2>{username}</h2>
    </div>
  );
}

export default App;
