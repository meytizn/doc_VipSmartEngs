"use client"

// Products.tsx
import { AppDispatch, RootState } from '@/redux/store'; // Adjust the path accordingly
import { useDispatch, useSelector } from 'react-redux';
import { productFetch } from '@/redux/productSlice'; // Adjust the path accordingly
import React, { useEffect } from 'react';
import cartSlice, { CartProductInterfaceSlice } from '@/redux/cartSlice';






const Products = () => {
    const dispatch = useDispatch<AppDispatch>(); 
    const { data, status } = useSelector((state: RootState) => state.products); 

    const {addToCart} = cartSlice.actions


    useEffect(() => {
        dispatch(productFetch());
    }, []);

    if (status === 'loading ...') {
        return <h1>Loading...</h1>;
    }
    if (status === 'failed ...') {
        return <h1>Failed to load products.</h1>;
    }

    return (
        <>




    <div className=' w-full justify-evenly gap-2  md:w-[90%] m-auto flex flex-row md:flex-row flex-wrap pt-5 content-center gap-y-8 py-[120px]'>
    {data.map((product: CartProductInterfaceSlice) => (
        <div className=' rounded-md 
        shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.8)]
        border-[#9c0000] p-5 flex flex-col w-[45%] md:w-[20%] text-[16px] text-center   gap-3' key={product.id}>


            <div className='text-black flex justify-center'>
                <img className="w-[180px] h-[165px]" src={product.image} alt={product.title} />
            </div>
            
            <h1 className='text-black truncate w-full text-center'>{product.title}</h1>
            
            
            
            
            <div className='w-full flex flex-row justify-around md:justify-between   content-center items-center  '>
                <h5 className='p-2 rounded-md font-extrabold text-green-800'>${product.price}</h5>
                <img onClick={() => dispatch(addToCart(product))} src="/icons/basketblack.png"
                 className='w-[35px] cursor-pointer md:ml-13' />
                
                <img onClick={() => alert('fav choosed')} src="/icons/blackfav.png"
                 className='w-[25px] cursor-pointer' />
            </div>
        </div>
    ))}
</div>
</>
);
};

export default Products;
