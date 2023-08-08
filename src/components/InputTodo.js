import React, { useState } from "react";
import TagList from "./TagList";
import { FormContainer, TagInputContainer, ButtonContainer, SubmitButton, TagFormInputText, TagErrorMessage } from "./CustomStyledComponents";

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
      const tagName = e.target.value.toLowerCase().trim();
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
        setRepeatedTagError("This tag " + tagName + " is already been used for this Todo Item.")

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
      <FormContainer onSubmit={handleSubmit}>
        <TagInputContainer>
          <TagFormInputText
            type="text"
            placeholder="Add todo..."
            value={todo.title}
            name="title"
            onChange={onChange}
          />
          <TagFormInputText
            type="text"
            placeholder="Add assignee..."
            value={todo.assignee}
            name="assignee"
            onChange={onChange}
          />
        </TagInputContainer>
      </FormContainer>

      <TagInputContainer>
        <TagFormInputText
        type="text"
        placeholder="Add tags..."
        value={tag}
        name="tags"
        onChange={onTagChange}
        onKeyDown={onPressEnter}
        />
      </TagInputContainer>
      <TagErrorMessage>{repeatedTagError}</TagErrorMessage>
      <TagList tags={todo.tags} todo={todo} setTodo={setTodo}></TagList>

      <ButtonContainer>
        <SubmitButton type="submit" value="Submit" />
      </ButtonContainer>
    </>
  );
}

export default InputTodo;
