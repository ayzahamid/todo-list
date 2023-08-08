import React, { useState } from "react";
import Tag from "./Tag";

const InputTodo = (props) => {
  const defaultState = {
    title: "",
    assignee: "",
    tags: []
  };

  const [todo, setTodo] = useState(defaultState)
  const [tag, setTag] = useState([])
  const [tagColors, setTagColors] = useState({})

  const onChange = e => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value
    });
  };


  const onTagChange = e => {
    setTag(e.target.value)
  }

  const randomColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
  }

  const onPressEnter = e => {
    if (e.key === "Enter" && e.target.value) {
      const tagName = e.target.value.toLowerCase().replace(/[^a-z]/g, "").trim();
      let tagColor = tagColors[tagName];

      if(!tagColor){
        tagColor = randomColor();
        setTagColors({
          ...tagColors,
          [tagName]: tagColor
        });
      }

      const newTag = {
        name: e.target.value,
        color: tagColor
      }

      setTodo({
        ...todo,
        tags: [...todo.tags, newTag]
      })
      setTag([]);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodoProps(todo);
    setTodo(defaultState);
    setTag([]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={todo.title}
          name="title"
          onChange={onChange}
        />
        <input
          type="text"
          className="input-text"
          placeholder="Add assignee..."
          value={todo.assignee}
          name="assignee"
          onChange={onChange}
        />
        <input type="submit" className="input-submit" value="Submit" />
      </form>

      <input
      type="text"
      className="input-text"
      placeholder="Add tags..."
      value={tag}
      name="tags"
      onChange={onTagChange}
      onKeyDown={onPressEnter}
      />
      <Tag tags={todo.tags}></Tag>
    </>
  );
}

export default InputTodo;
