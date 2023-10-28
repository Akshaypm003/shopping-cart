import React from 'react'
import { useDispatch,} from 'react-redux';
import { addToCart } from '../slices/Cartslice';

const Products = () => {
    const products = [
      {
        id: 1,
        name: "iPhone-X",
        price: 800,
        qty: 1,
        src: "https://www.freeiconspng.com/thumbs/iphone-x-pictures/new-iphone-x-photo-18.png",
      },
      {
        id: 2,
        name: "iPhone-15",
        price: 4000,
        qty: 1,
        src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674295/Croma%20Assets/Communication/Mobiles/Images/300823_0_m39ki5.png?tr=w-600",
      },
      {
        id: 3,
        name: "iPhone-14Pro",
        price: 3000,
        qty: 1,
        src: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-silver-220907-geo_inline.jpg.large.jpg",
      },
      {
        id: 4,
        name: "iPhone-15Mini",
        price: 3800,
        qty: 1,
        src: "https://images.hindustantimes.com/tech/htmobile4/P36969/images/Design/148767-v1-apple-iphone-15-mini-mobile-phone-large-3.jpg",
      },
      {
        id: 5,
        name: "iPhone-7S",
        price: 500,
        qty: 1,
        src: "https://www.91-img.com/gallery_images_uploads/5/f/5f6d7b7653edce8aba1372b32c6e45094a146182.jpg?tr=h-630,c-at_max,q-80",
      },
      {
        id: 6,
        name: "iPhone-12",
        price: 1500,
        qty: 1,
        src: "https://img.giznext.com/assets/model/2/96/apple-iphone-12-bf42db0fa85b24eae7f527a7b5a260.jpg",
      },
      {
        id: 7,
        name: "iPhone-13Pro",
        price: 2500,
        qty: 1,
        src: "https://ismart.co.in/wp-content/uploads/2021/09/iphone-13-pro-graphite-select.png",
      },
    ];

    const dispatch = useDispatch();
  
    
  return (
    <>
      <div className="pro-container p-5 flex flex-wrap justify-start gap-4">
        {products.map((product)=>{
            return (
              <div
                key={product.id}
                className="product flex flex-col w-[230px]  justify-evenly p-4  bg-white rounded-sm relative"
              >
                <img
                  src={product.src}
                  alt=""
                  className=" w-[100%] h-[250px]"
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