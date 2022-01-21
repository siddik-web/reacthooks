import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const handelClick = (e) => {
    e.preventDefault();
    const task = document.querySelector("#task");
    if (task.value !== "") {
      todos.push({ text: task.value});
      setTodos([...todos], todos);
    }
    task.value = "";
  };

  return (
    <div className="container">
      <header className="App-header">
        <h2>Todo Example Using useState Hook</h2>
      </header>
      <div className="row">
        <div className="col-auto">
          <input type="text" id="task" className="form-control" />
        </div>
        <div className="col-auto">
          <button onClick={handelClick} className="btn btn-primary">
            Add
          </button>
        </div>
       
      </div>
      <ul className="list-unstyled">
            {todos.map((todo, index) => {
              return (
                <li key={index}>
                  <input type="checkbox" className="checked"/>
                  {todo.text}
                </li>
              );
            })}
          </ul>
    </div>
  );
}

export default App;
