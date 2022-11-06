import { useState } from "react";
import Parent from "./components/Parent";
import { AppContext } from "./contexts/AppContext";

function App() {
  const [username, setUsername] = useState("Md Siddiqur Rahman");

  return (
    <AppContext.Provider value={{ setUsername }}>
      <div className="container">
        <Parent />
        <h2>{username}</h2>
      </div>
    </AppContext.Provider>
  );
}

export default App;
