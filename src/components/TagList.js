import React from "react";
import styled from "styled-components";

const FlexDisplay = styled.div`
  display: flex;
  width: "100%";
`

const TodoTagBlock = styled.span`
  display: flex;
  width: fit-content;
  padding: 2px 20px;
  border-radius: 18px;
  text-align: center;
  text-shadow: 1px black;
  margin: 0 5px;
`

const TodoTagText = styled.span`
  font-size: 16px;
`

const RemoveTagIcon = styled.span`
  padding-left: 0.5rem;
  font-weight: bold;
`

const TagList = (props) => {
  const removeTag = (index) => {
    props.setTodo({
      ...props.todo,
      tags: props.todo.tags.filter((element, todo_index) => todo_index !== index),
    })
  }

  return (
    <FlexDisplay>
      {
        props.tags &&
        props.tags.map((tag, index) => <TodoTagBlock key={index} style={{backgroundColor:tag.color}}>
          <TodoTagText>{tag.name}</TodoTagText>
          <RemoveTagIcon onClick={()=>removeTag(index)}>x</RemoveTagIcon>
        </TodoTagBlock>)
      }
    </FlexDisplay>
  );
}

export default TagList;
