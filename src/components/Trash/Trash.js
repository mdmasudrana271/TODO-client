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
    <section>
      {
        trash.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-10 my-20">
        {trash?.map((todo) => (
          <TrashCard key={todo._id} todo={todo}></TrashCard>
        ))}
      </div> : <p className="text-center text-2xl font-bold mt-60">Trash is empty</p>
      }
    </section>
  );
};

export default Trash;
