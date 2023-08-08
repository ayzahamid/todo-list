import React, { useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  margin-left: 3rem;
`

const TodoListContainer = styled.div`
  margin-top: 2rem;
`
const CompletedTaskContainer = styled.div`
  margin-top: 2rem;
  margin-top: 2rem;
  border: 1px solid #9fec9f;
  padding: 1.5rem 0.5rem;
  border-radius: 2rem;
`

const TodoContainer = (props) => {
  const defaultState =[
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Setup development environment",
      completed: true,
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Develop website and add content",
      completed: false,
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Deploy to live server",
      completed: false,
    },
  ]

  const [todos, setTodos] = useState(defaultState)

  const handleChange = (id) => {
    setTodos(todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  const delTodo = (id) => {
    setTodos([
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    );
  };

  const addTodoItem = (todo) => {
    const newTodo = {
      id: uuidv4(),
      title: todo.title,
      completed: false,
      assignee: todo.assignee,
      tags: todo.tags
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <Container>
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodoListContainer>
        <h2>To Be Done</h2>
        <TodosList
          todos={todos.filter(todo => !todo.completed)}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
        />
      </TodoListContainer>

      <CompletedTaskContainer>
        <h2>Completed Tasks</h2>
        <TodosList
          todos={todos.filter(todo => todo.completed)}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
        />
      </CompletedTaskContainer>
    </Container>
  );
}
export default TodoContainer;
