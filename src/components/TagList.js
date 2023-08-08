import React from "react";

const TagList = (props) => {
  const removeTag = (index) => {
    props.setTodo({
      ...props.todo,
      tags: props.todo.tags.filter((element, todo_index) => todo_index !== index),
    })
  }

  return (
    <div className="display-flex">
      {
        props.tags &&
        props.tags.map((tag, index) => <span key={index} className="tag" style={{backgroundColor:tag.color}}>
          <span>{tag.name}</span>
          <span onClick={()=>removeTag(index)}>x</span>
          </span>)
      }
    </div>
  );
}

export default TagList;
