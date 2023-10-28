import React, { useEffect, useState } from "react";
import "../Styles/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { addToCart, clearCart,clearProduct, removeFromCart } from "../slices/Cartslice";



const Cart = () => {

  const cartItems = useSelector((state) => state.cart.value);
  const [newCart, setNewCart] = useState([]);
  const [billAmount, setBillAmount] = useState(0)
  const dispatch = useDispatch()


  useEffect(() => {
    const updatedItems = cartItems.map((item) => ({
      ...item,
      totalPrice: item.price * item.qty,
    }));

    setNewCart(updatedItems);
    
    const totalAmount = updatedItems.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );
    setBillAmount(totalAmount);

  }, [cartItems]);

  

  return (
    <>
      <div className="cart-container p-5 pt-7 flex flex-wrap justify-start gap-4 relative">
        <span className=" absolute top-[-15px] left-4 z-40 bg-slate-100 text-slate-800 px-3 py-1 font-semibold text-lg rounded-md">
          Bill : ${billAmount}
        </span>
        <span
          onClick={() => dispatch(clearCart())}
          className=" absolute top-[-15px] right-4 z-40 bg-slate-200 text-slate-800 px-3 py-1 font-semibold text-lg rounded-md"
        >
          Clear Cart
        </span>

        {newCart.length === 0 ? (
          <div className="absolute top-[30vh] left-[20vw] uppercase text-6xl text-slate-800 font-bold">
            cart is empty 🤷‍♂️
          </div>
        ) : (
          newCart.map((product) => {
            return (
              <div className="cart-card flex flex-col w-[230px] bg-white justify-evenly p-4 rounded-sm relative">
                <span
                  onClick={() => dispatch(clearProduct(product))}
                  className="absolute top-2 right-2 text-xl text-slate-500"
                >
                  <AiOutlineClose />
                </span>
                <img src={product.src} alt="" className="w-[100%] h-[250px]" />
                <span className="my-auto text-xl font-semibold">
                  {product.name}
                </span>
                <span className="my-auto text-xl font-semibold">{`$${product.totalPrice}`}</span>
                <div className="qty-handle my-auto text-xl font-bold flex justify-around">
                  <button
                    onClick={() => dispatch(removeFromCart(product))}
                    className="text-red-700 text-3xl my-auto"
                  >
                    -
                  </button>
                  <span className="my-auto">Qty:{product.qty}</span>
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="text-green-700 text-3xl my-auto"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Cart;
