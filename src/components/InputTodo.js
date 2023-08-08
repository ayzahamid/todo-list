import React, { useState } from "react";

const InputTodo = (props) => {
  const defaultState = {
    title: ""
  };

  const [todo, setTodo] = useState(defaultState)

  const onChange = e => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodoProps(todo);
    setTodo(defaultState);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={todo.title}
        name="title"
        onChange={onChange}
      />
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  );
}

export default InputTodo;
