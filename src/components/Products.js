import React from 'react';
import ProductsCard from './ProductsCard';

const Products = ({ products }) => {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl text-white py-2 w-80 text-center'>Shop Everyday. EveryTime</h1>
        <span className='w-20 h-[3px] bg-white'></span>
        <p className='max-w-[700px] text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laudantium repudiandae quisquam aperiam eveniet, excepturi, facilis rem a provident adipisci minus dicta earum. Ex, rerum voluptatem eveniet eos eius quae.</p>
      </div>
      <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4'>
        {products.map((item) => (
          <ProductsCard key={item.id} product={ item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
