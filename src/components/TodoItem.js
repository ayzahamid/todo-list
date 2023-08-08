import React from "react";
import TagList from "./TagList";
import styled from "styled-components";

const TodoItemText = styled.div`
  list-style-type: none;
  padding: 17px 0px;
  border-bottom: 1px solid #eaeaea;
`

const CompleteTodoCheck = styled.input`
  margin-right: 15px;
`

const DeleteTodoButton = styled.button`
  background: #d35e0f;
  color: #fff;
  border: 1px solid #d35e0f;
  padding: 3px 7px;
  cursor: pointer;
  float: right;
  outline: none;
`

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through"
  };

  const { completed, id, title, assignee, tags } = props.todo;

  return (
    <TodoItemText>
      <CompleteTodoCheck
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
      />
      <DeleteTodoButton onClick={() => props.deleteTodoProps(id)}>Delete</DeleteTodoButton>
      <span style={completed ? completedStyle : null}>{title}</span>
      <p>{assignee && `Assigned To: ${assignee}` }</p>
      <p><TagList tags={tags}></TagList></p>
    </TodoItemText>
  );
}

export default TodoItem;
