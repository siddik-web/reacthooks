import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";

const lists = [
  'Dhaka',
  'Volvo',
  'Nokia'
];

function App() {
  const { name } = {name:"Md Siddiqur Rahman"};
  const handelSearch = (e) => {
    console.log(e.target.value);
  }

  const handelDelete = (index) =>{
    console.log("first");
    lists.splice(index);
  }
  console.log(lists);
  return (
    <div className="container">
      <h1>Hello { name }!</h1>
      <Search onSearch={handelSearch}/>
      <List lists={lists} onDelete={handelDelete}/>
    </div>
  );
}

export default App;
