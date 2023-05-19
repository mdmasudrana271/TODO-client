import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AddTodo = () => {

  const {user} = useContext(AuthContext)


    const handleAddTodo = (event)=>{
      event.preventDefault();
      const form = event.target;
      const title = form.title.value;
      const description = form.description.value;
      
      const todo = {
        title,
        description,
        email:user?.email
      }

      console.log(todo)


      fetch("http://localhost:5000/add-todo",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(todo)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        form.reset()
      })

    }


    return (
        <div className=" my-10 ">
      <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100 md:w-4/12 mx-auto">
        <form onSubmit={handleAddTodo} className="card-body">
          <h2>Add Todo</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea className="textarea textarea-bordered" placeholder="Description" name='description'></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default AddTodo;