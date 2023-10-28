import React, { useEffect, useState } from "react";
import "../Styles/Cart.css";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.value);

  const [newCart, setNewCart] = useState([]);
  const [billAmount, setBillAmount] = useState(0)


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
        <span className=" absolute top-[-15px] right-4 z-40 bg-slate-100 text-slate-800 px-3 py-1 font-semibold text-lg rounded-md">Bill : ${billAmount}</span>
        {newCart.length === 0 ? (
          <div>hii</div>
        ) : (
          newCart.map((product) => {
            return (
              <div className="cart-card flex flex-col w-[200px] bg-white justify-evenly p-4 rounded-sm relative">
                <span className="absolute top-2 right-2 text-xl text-slate-500">
                  <AiOutlineClose />
                </span>
                <img
                  src="https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-optimized.jpeg"
                  alt=""
                  className="object-cover w-[100%] "
                />
                <span className="my-auto text-xl font-semibold">
                  {product.name}
                </span>
                <span className="my-auto text-xl font-semibold">{`$${product.totalPrice}`}</span>
                <div className="qty-handle my-auto text-xl font-bold flex justify-around">
                  <button className="text-red-700 text-3xl my-auto">-</button>
                  <span className="my-auto">Qty:{product.qty}</span>
                  <button className="text-green-700 text-3xl my-auto">+</button>
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
