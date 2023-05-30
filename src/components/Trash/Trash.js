import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import TrashCard from "./TrashCard";

const Trash = () => {
  const [trash, setTrash] = useState([]);

  const { user } = useContext(AuthContext);
  
  useEffect(()=>{
    fetch(`https://todo-app-server-side-phi.vercel.app/trash?email=${user.email}`)
    .then((res) => res.json())
    .then((data) => {
      setTrash(data);
    });
  },[user.email])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-10 my-20">
      {trash?.map((todo) => (
        <TrashCard key={todo._id} todo={todo}></TrashCard>
      ))}
    </div>
  );
};

export default Trash;
