import React from 'react'

const Cart = () => {
  return (
    <>
      <div className="cart-container p-5">
        <div className="cart-pro flex flex-col w-[200px]  justify-evenly p-4 bg-slate-400 rounded-sm">
          <img
            src="https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-optimized.jpeg"
            alt=""
            className="object-cover w-[100%] "
          />
          <span className="my-auto text-xl font-semibold">product</span>
          <span className="my-auto text-xl font-semibold">$4000</span>
          <div className="qty-handle my-auto text-xl font-bold flex justify-around">
            <span className="text-red-700">-</span>
            <span>Qty:1</span>
            <span className="text-green-700">+</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart