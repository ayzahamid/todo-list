import React from "react";
import TagList from "./TagList";

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through"
  };

  const { completed, id, title, assignee, tags } = props.todo;

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
      />
      <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>{title}</span>
      <p>{assignee && `Assigned To: ${assignee}` }</p>
      <p><TagList tags={tags}></TagList></p>
    </li>
  );
}

export default TodoItem;
