import React, { useState } from "react";
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";

import "./home.jsx";

function Home() {
  const [toDoList, setToDoList] = useState(data);
  return (
    <div className="Home">
      <h1>To Do List</h1>
      {/* <ToDoList toDoList={toDoList} /> */}
      <Header />
    </div>
  );
}

export default Home;
