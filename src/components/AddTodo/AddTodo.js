import React from 'react';

const AddTodo = () => {


    const handleAddTodo = ()=>{

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
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
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