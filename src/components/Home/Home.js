import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoCard from "./TodoCard";
import { AuthContext } from "../../context/AuthProvider";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const { user, logOut } = useContext(AuthContext);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;
    fetch(`https://todo-app-server-side-phi.vercel.app/search?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  };

  useEffect(() => {
    fetch(
      `https://todo-app-server-side-phi.vercel.app/all-todo?email=${user.email}`,
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("todoAppAccessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
      });
  }, [user.email, logOut]);

  return (
    <div className="mt-5">
      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center mt-10 mx-5"
      >
        <input
          type="text"
          placeholder="Search Todo"
          name="search"
          className="input w-full max-w-xs form-control shadow-xl bg-slate-100"
        />
      </form>

      {
        todos.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-5 md:mx-10 my-20">
        {todos?.map((todo) => (
          <Link to={`details/${todo._id}`} key={todo._id}>
            <TodoCard todo={todo}></TodoCard>
          </Link>
        ))}
      </div> : <p className="text-center text-2xl font-bold mt-20">No Match Found</p>
      }
    </div>
  );
};

export default Home;
