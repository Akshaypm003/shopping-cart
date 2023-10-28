import React from 'react'
import { useDispatch,} from 'react-redux';
import { addToCart } from '../slices/Cartslice';

const Products = () => {
    const products = [
      {id:1 , name: "iPhone-X", price: 800 ,qty:1},
      {id:2 , name: "iPhone-15", price: 4000 ,qty:1},
      {id:3 , name: "iPhone-14Pro", price: 3000 ,qty:1},
      {id:4 , name: "iPhone-15Mini", price: 3800 ,qty:1},
      {id:5 , name: "iPhone-7S", price: 500 ,qty:1},
      {id:6 , name: "iPhone-12", price: 1500 ,qty:1},
      {id:7 , name: "iPhone-13Pro", price: 2500 ,qty:1},
    ];

    const dispatch = useDispatch();
  
    
  return (
    <>
      <div className="pro-container p-5 flex flex-wrap justify-start gap-4">
        {products.map((product)=>{
            return (
              <div
                key={product.id}
                className="product flex flex-col w-[200px]  justify-evenly p-4  bg-white rounded-sm relative"
              >
                <img
                  src="https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-optimized.jpeg"
                  alt=""
                  className="object-cover w-[100%] "
                />
                <span className="my-auto text-xl font-semibold">
                  {product.name}
                </span>
                <span className="my-auto text-xl font-semibold">{`$${product.price}`}</span>
                <button
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                  className="px-2 rounded absolute bottom-2 right-2 bg-slate-400 text-white"
                >
                  Add to Cart
                </button>
              </div>
            );
        })}
       
      </div>
    </>
  );
}

export default Products