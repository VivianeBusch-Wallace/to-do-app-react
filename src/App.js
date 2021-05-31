// importing useState and React
import React, { useState } from "react";

// Importing components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HandleInput from "./components/InputArea";
import ToDoList from "./components/ToDoList";

function App() {
  // useState for the list of todos >>
  const [list, setList] = useState([]);

  // function to remove a listitem on click of trashcan (see function call in ToDoList.js) >>
  const remove = (itemToRemove) => {
    // << itemToRemove is the id of the clicked list item
    // all items that do not match this id will be put into a new array which will replace the old list >>
    const newToDoList = list.filter((item) => item.id !== itemToRemove);
    // setList now receives the new array >>
    setList(newToDoList);
  };

  return (
    <div className="App">
      <Header />
      <HandleInput />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default App;
