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

  // function to mark the todo as finished >>
  const statusChecked = (itemToCheck) => {
    // << itemToCheck receives the id for that specific item from ToDoList.js

    setList((items) => {
      // this returns the item which matches the id of the checked/unchecked item and toggles the checked Status >>
      return items.filter((item) => {
        if (item.id === itemToCheck) item.done = !item.done;
        return item;
      });
    });
  };

  // changing priority of a to-do item by clicking on the word >>
  const increasePriority = (id) => {
    const toDo = list.find((toDo) => toDo.id === id);
    let target = toDo.priority < 5 ? toDo.priority++ : (toDo.priority = 0);
    let index = list.findIndex((item) => item.id === id);

    let filteredList = list.filter((toDo) => toDo.id != id);

    let newList = list.splice(index, 1);

    console.log(newList);
    setList([...newList, ...filteredList]);
  };

  return (
    <div className="App">
      <Header />
      <HandleInput setList={setList} />
      <ToDoList
        list={list}
        remove={remove}
        statusChecked={statusChecked}
        increasePrio={increasePriority}
      />
      <Footer />
    </div>
  );
}

export default App;
