import React from "react";

const TodoCard = ({ todo }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl border">
        <div className="card-body">
          <h2 className="card-title">{todo.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
