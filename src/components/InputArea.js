// import useState from React >>
import { useState } from "react";

// import unique universal identifier from package >>
import { v4 as uuidv4 } from "uuid";

function HandleInput(props) {
  // set useState >>
  const [userInput, setUserInput] = useState("");

  // target user input with useState >>
  function userInputChanges(e) {
    setUserInput(e.target.value);
  }

  // add the input into the object array of todos >>
  function addToList(e) {
    // prevent default of form >>
    e.preventDefault();

    //make sure the input is not processed when it's empty with an if condition >>
    if (userInput.length) {
      // create item list and to ensure we don't replace the old listitem with the new>>
      props.setList((prevState) => [
        ...prevState,
        { id: uuidv4(), title: userInput.trim(), done: false, priority: 0 },
      ]);
    }
    // clear userInput on submit
    setUserInput("");
  }

  return (
    <form onSubmit={addToList}>
      <input type="text" value={userInput} onChange={userInputChanges} />
      <input type="submit" value="Add to List" />
    </form>
  );
}

export default HandleInput;
