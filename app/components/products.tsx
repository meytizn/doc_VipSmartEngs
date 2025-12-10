"use client"

// Products.tsx
import { AppDispatch, RootState } from '@/redux/store'; // Adjust the path accordingly
import { useDispatch, useSelector } from 'react-redux';
import { productFetch } from '@/redux/productSlice'; // Adjust the path accordingly
import React, { useEffect } from 'react';

interface ProductInterface {
    id: number;
    title: string;
    price: string;
    image: string;
}

const Products = () => {
    const dispatch = useDispatch<AppDispatch>(); // Specify the dispatch type

    // Use the RootState type for the state in useSelector
    const { data, status } = useSelector((state: RootState) => state.products); 

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
        <div className='w-full flex-col md:w-[80%] m-auto flex md:flex-row flex-wrap mt-[100px] content-center gap-y-8'>
            {data.map((product: ProductInterface) => (
                <div className='flex flex-col text-[16px] text-center w-full md:w-[25%] gap-3' key={product.id}>
                    <div className='text-black flex justify-center'>
                        <img className="w-[180px] h-[165px]" src={product.image} alt={product.title} />
                    </div>
                    <h1 className='text-black'>{product.title}</h1>
                    <div className='flex flex-row justify-center gap-6'>
                        <h5 className='p-2 rounded-md font-extrabold text-green-800'>${product.price}</h5>
                        <button className='btn border p-2 rounded-md font-bold cursor-pointer shadow'>
                            Add
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
