import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";

const lists = [
 {id:1, name: "Dhaka"},
 {id:2, name: "Syllhet"},
 {id:3, name: "Chittagon"},
 {id:4, name: "Rajshahi"},
];

function App() {
  const { name } = { name: "Md Siddiqur Rahman" };
  const [list, setList] = useState(lists);
  const handelSearch = (e) => {
 
  }

  const handelDelete = (index) =>{
    console.log(index)
  }

  const handelClick = (a) => {
    alert(a);
  }

  return (
    <div className="container">
      <h1 onClick={() => handelClick(name)}>Hello { name }!</h1>
      <Search onSearch={handelSearch}/>
      <List lists={list} onDelete={handelDelete}/>
    </div>
  );
}

export default App;
