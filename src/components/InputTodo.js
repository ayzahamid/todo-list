import React, { useState } from "react";
import TagList from "./TagList";

const InputTodo = (props) => {
  const defaultState = {
    title: "",
    assignee: "",
    tags: []
  };

  const [todo, setTodo] = useState(defaultState)
  const [tag, setTag] = useState([])
  const [tagColors, setTagColors] = useState({})
  const [repeatedTagError, setRepeatedTagError] = useState("")

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

  const validateTagRepitition = (tagName) => {
    let repeat_flag = false;

    todo.tags.forEach((element) => {
      if (element.name === tagName) {
        return repeat_flag = true;
      }
    });

    return repeat_flag;
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

      if (!validateTagRepitition(tagName)) {
        const newTag = {
          name: e.target.value,
          color: tagColor
        }

        setTodo({
          ...todo,
          tags: [...todo.tags, newTag]
        })
        setTag([]);
      } else {
        setRepeatedTagError("This tag " + tagName + "is already been used for this Todo Item.")

        setTimeout(function () {
          setRepeatedTagError("");
        }, 2000)
      }
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
      <div>{repeatedTagError}</div>
      <TagList tags={todo.tags} todo={todo} setTodo={setTodo}></TagList>
    </>
  );
}

export default InputTodo;
