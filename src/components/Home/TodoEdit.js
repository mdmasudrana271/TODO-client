import React from "react";
import { toast } from "react-hot-toast";

const TodoEdit = ({ data }) => {

  const handlEditTodo = (event) => {
    event.preventDefault();
    const form = event.target;
    const description = form.description.value;
    const newTodo = {
        id : data._id,
        description : description
    }
    

    fetch('https://todo-app-server-side-phi.vercel.app/edit',{
        method: 'PATCH',
        headers: {
            'content-type': 'application/json', 
          },
          body: JSON.stringify(newTodo),
    })
    .then(res=> res.json())
    .then(data=>{
        if(data.modifiedCount > 0){
            toast.success('Edit Todo Successfully')
            window.location.reload();
        }
    })


  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
        <form onSubmit={handlEditTodo} >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="input input-bordered"
              value={data.title}
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Description"
              name="description"
              defaultValue={data.description}
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default TodoEdit;
