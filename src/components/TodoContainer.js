import React, { useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

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
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <div className="row">
        <div className="col-md-6">
          <TodosList
            todos={todos.filter(todo => !todo.completed)}
            handleChangeProps={handleChange}
            deleteTodoProps={delTodo}
          />
        </div>

        <div className="col-md-6">
          <h2>Completed Tasks</h2>
          <TodosList
            todos={todos.filter(todo => todo.completed)}
            handleChangeProps={handleChange}
            deleteTodoProps={delTodo}
          />
        </div>
      </div>
    </div>
  );
}
export default TodoContainer;
