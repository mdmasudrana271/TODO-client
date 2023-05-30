import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import TodoEdit from "./TodoEdit";
import { toast } from "react-hot-toast";

const Description = () => {
    const data = useLoaderData()
    const [complete, setComplete] = useState(false);

    console.log(data)

    const navigate = useNavigate()

    const handleDelete = ()=>{

      alert('Are you sure you wnat to delete this item?')

      fetch(`http://localhost:5000/delete/${data._id}`,{
        method: "DELETE",
        headers:{
          'content-type': "application/json"
        },
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.acknowledged){
          toast.success("Todo deleted successfully!")
          navigate('/')
        }
      })
    }

    const handleComplete = () =>{
      fetch(`http://localhost:5000/update-status?id=${data._id}`,{
        method: "PATCH",
        headers:{
          'content-type': "application/json"
        }
      })
      .then(res=> res.json())
      .then(data=>{
        if(data.modifiedCount > 0){
          window.location.reload()
        }
      })
    }

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="card w-96 bg-base-100 shadow-xl relative">
      <input type="checkbox" onClick={handleComplete} className={`checkbox checkbox-success absolute right-2 top-2 ${data.status === 'completed' ? "hidden" : undefined}`} />
        <div className="card-body">
          <h2 className={`card-title ${data.status === 'completed' ? "line-through" : undefined}`}>{data.title}</h2>
          <p className={`${data.status === 'completed' ? "line-through" : undefined}`}>{data.description}</p>
        </div>
        <div className="flex justify-between items-center p-5">
          <label htmlFor="my-modal-3" className="btn btn-accent"><FaEdit></FaEdit></label>
          <button onClick={handleDelete} className="btn btn-warning"><FaTrashAlt></FaTrashAlt></button>
        </div>
      </div>
      <TodoEdit data={data}></TodoEdit>
    </div>
  );
};

export default Description;
