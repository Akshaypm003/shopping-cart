import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const cartLen = useSelector((state) => state.cart.value.length);

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
        <div className="relative">
          <button
            className="text-3xl text-sky-950 my-auto"
            onClick={() => navigate("/cart")}
          >
            <BsFillCartFill />
          </button>
          <span className="absolute top-[-5px] right-[-8px] bg-red-700 rounded-full px-[6px] text-white font-thin text-sm">
            {cartLen}
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar
