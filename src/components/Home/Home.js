import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoCard from "./TodoCard";
import { AuthContext } from "../../context/AuthProvider";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const { user } = useContext(AuthContext);


  const handleSearch =(event)=>{
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;
    fetch(`https://todo-app-server-side-phi.vercel.app/search?search=${search}`)
    .then(res=> res.json())
    .then(data=> {
      setTodos(data)
    })

  }



  useEffect(() => {
    fetch(`https://todo-app-server-side-phi.vercel.app/all-todo?email=${user.email}`,{
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem("todoAppAccessToken")}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, [user.email]);

  return (
    <div className="mt-5">
      <form onSubmit={handleSearch} className="flex justify-center items-center mt-10">
        <input
          type="text"
          placeholder="Search Todo"
          name='search'
          className="input w-full max-w-xs form-control shadow-xl"
        />
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-10 my-20">
        {todos?.map((todo) => (
          <Link to={`details/${todo._id}`} key={todo._id}>
            <TodoCard todo={todo}></TodoCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
