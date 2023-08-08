import React from "react";

const Tag = (props) => {
  return (
    <div className="display-flex">
      {props.tags && props.tags.map((tag, index) => <span key={index} className="tag" style={{backgroundColor:tag.color}}>{tag.name}</span>)}
    </div>
  );
}

export default Tag;
