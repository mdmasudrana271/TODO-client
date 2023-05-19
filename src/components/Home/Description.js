import React from "react";
import { useLoaderData } from "react-router-dom";

const Description = () => {
    const data = useLoaderData()
    console.log(data)

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
