import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

   const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-between px-10 py-5 h-[80px] bg-slate-100">
        <h1
          className="text-xl font-bold text-sky-950 my-auto"
          onClick={() => navigate("/")}
        >
          Shop
        </h1>
        <button
          className="text-3xl text-sky-950 my-auto"
          onClick={() => navigate("/cart")}
        >
          <BsFillCartFill />
        </button>
      </div>
    </>
  );
}

export default Navbar
