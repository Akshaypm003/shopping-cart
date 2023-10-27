import React from 'react'

const Products = () => {
    const products = [
      { name: "iPhone-X", price: 800 },
      { name: "iPhone-15", price: 4000 },
      { name: "iPhone-14Pro", price: 3000 },
      { name: "iPhone-15Mini", price: 3800 },
      { name: "iPhone-7S", price: 500 },
      { name: "iPhone-12", price: 1500 },
      { name: "iPhone-13Pro", price: 2500 },
    ];
  return (
    <>
      <div className="pro-container p-5 flex flex-wrap justify-start gap-4">
        {products.map((product)=>{
            return (
              <div className="product flex flex-col w-[200px]  justify-evenly p-4 bg-slate-400 rounded-sm relative">
                <img
                  src="https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-optimized.jpeg"
                  alt=""
                  className="object-cover w-[100%] "
                />
                <span className="my-auto text-xl font-semibold">{product.name}</span>
                <span className="my-auto text-xl font-semibold">{`$${product.price}`}</span>
                <button className='px-2 rounded absolute bottom-2 right-2 bg-slate-600'>ADD</button>
              </div>
            );
        })}
       
      </div>
    </>
  );
}

export default Products