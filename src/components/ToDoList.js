// this is the todo list we actually see in the browser using the data we sent with each submit >>
const ToDoList = (props) => {
  const userTodos = props.list.map((toDo, i) => (
    <li key={i}>
      {/* << each repetitive item in react should have a key, it is enough if key is put into li, then the content does not need it */}
      <input
        type="checkbox"
        defaultChecked={toDo.done}
        onChange={() => props.check(toDo.id)}
      />
      {toDo.title}
      <span onClick={() => props.increasePrio(toDo.id)}>
        | priority: {toDo.priority} |
      </span>
      {/* remove the listitem on click of icon >> */}
      <i
        onClick={() => {
          //   console.log(toDo.id);
          props.remove(toDo.id);
        }}
      >
        🗑
      </i>
    </li>
  ));
  return <ul>{userTodos}</ul>;
};

export default ToDoList;
