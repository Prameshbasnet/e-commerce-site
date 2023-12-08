import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const [totalAmt, setTotalAmt] = useState('');

  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price); 
  }, [productData]);

  return (
    <div>
      <img
        className='w-full h-[300px] object-cover'
        src="https://th.bing.com/th/id/OIP.s4GKqfEAUHW3XmRbiDg4gAHaC9?w=350&h=140&c=7&r=0&o=5&pid=1.7"
        alt="cartImg"
      />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-[#494646] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6 '>
            <h2 className='text-2xl font-medium'>
              cart totals
            </h2>
            <p>
              Subtotal{''}
              <span className='font-titleFont font-bold text-lg'> Rs{totalAmt}</span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping{''}
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, consectetur.
              </span>
            </p>
          </div>
          <p>
            {''}
            Total <span className='text-xl font-bold'>Rs{totalAmt}</span>
          </p>
          <button className='btn mt-6 py-3'>proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
