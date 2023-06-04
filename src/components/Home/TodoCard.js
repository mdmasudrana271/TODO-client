import React from "react";

const TodoCard = ({ todo }) => {
  const {title, description} = todo;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl border">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.length > 40 ? description.slice(0, 40) : description} ...</p>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
