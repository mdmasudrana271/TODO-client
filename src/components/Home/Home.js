import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoCard from "./TodoCard";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-todo")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  console.log(todos);

  return (
    <div className="mt-5">
      <Link to="/add-todo">
        <button className="btn btn-warning">Add Todo</button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-10 my-20">
        {todos.map((todo) => (
          <Link to={`details/${todo._id}`} key={todo._id}><TodoCard todo={todo}></TodoCard></Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
