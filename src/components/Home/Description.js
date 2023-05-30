import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import TodoEdit from "./TodoEdit";
import { toast } from "react-hot-toast";

const Description = () => {
  const data = useLoaderData();

  console.log(data);

  const navigate = useNavigate();

  const handleDelete = () => {
    alert("Are you sure you wnat to delete this item?");

    fetch(`https://todo-app-server-side-phi.vercel.app/delete/${data._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Todo deleted successfully!");
          navigate("/");
        }
      });
  };

  const handleComplete = () => {
    fetch(`https://todo-app-server-side-phi.vercel.app/update-status?id=${data._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json", 
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          window.location.reload();
        }
      });
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="card w-96 bg-base-100 shadow-xl relative">
        {
          data.status === "completed" ? <p className="absolute right-4 top-7">{data.status}</p> : <input
          type="checkbox"
          onClick={handleComplete}
          className="checkbox checkbox-success absolute right-4 top-8"
        />
        }

        <div className="card-body">
          <h2
            className={`card-title ${
              data.status === "completed" ? "line-through" : undefined
            }`}
          >
            {data.title}
          </h2>
          <p
            className={`${
              data.status === "completed" ? "line-through" : undefined
            }`}
          >
            {data.description}
          </p>
        </div>
        <div className="flex justify-between items-center p-5">
          <label htmlFor="my-modal-3" className="btn btn-accent">
            <FaEdit></FaEdit>
          </label>
          <button onClick={handleDelete} className="btn btn-warning">
            <FaTrashAlt></FaTrashAlt>
          </button>
        </div>
      </div>
      <TodoEdit data={data}></TodoEdit>
    </div>
  );
};

export default Description;
