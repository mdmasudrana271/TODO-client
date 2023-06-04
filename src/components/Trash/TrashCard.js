import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TrashCard = ({ todo }) => {

    const navigate = useNavigate()

    const handleUndoTodo =()=>{
        fetch(`https://todo-app-server-side-phi.vercel.app/undo-todo/${todo._id}`,{
            method: 'DELETE',
            headers:{
                'content-type': "application/json"
            }
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.deletedCount > 0){
                toast.success("Todo undo successfully!")
                navigate('/')
            }
        })
    }


  return (
    <div className="card w-96 bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{todo.title}</h2>
        <p>{todo.description.length > 40 ? todo.description.slice(0, 40) : todo.description} ...</p>
      </div>
        <button onClick={handleUndoTodo} className="btn btn-xs btn-accent w-20 mx-7 my-2">Undo</button>
    </div>
  );
};

export default TrashCard;