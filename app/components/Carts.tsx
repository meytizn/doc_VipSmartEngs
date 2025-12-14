"use client"
import React, { useState } from 'react'
import { AppDispatch, RootState } from '@/redux/store'; // Adjust the path accordingly
import { useDispatch, useSelector } from 'react-redux';
import cartSlice, { CartProductInterfaceSlice } from '@/redux/cartSlice';

const Carts = () => {
    const carts = useSelector((state:RootState)=>state.carts)
    const dispatch = useDispatch<AppDispatch>()
    const {changeQuantityProduct,clearCart} = cartSlice.actions

    let total=0
    const totalCalculator=()=>{
        carts.map(
            (item)=>total+=item.price*item.quantity
        )
        return total
    }

    const [showbasket,setshowbasket]=useState(false)

  return (

    <>




<div className='w-full flex md:flex-row justify-between bg-white 
 fixed bottom-0 z-100 h-[48px] text-black  border-x-1 
        shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.8)]   border-t-2 
'>


 <button 
        onClick={()=>setshowbasket(!showbasket)} 
        className=" z-100   w-[30%] h-[48px]  border-r-1 border-l-1  bg-white "
        >
        <img src='/icons/basketblack.png' className=' m-auto w-[40px]'/>
        <h6 className='absolute top-0 px-3 py-1 text-green'>{carts.length}</h6>
      </button>


      
 <button 
        onClick={()=>setshowbasket(!showbasket)} 
        className=" z-100   w-[30%] h-[48px]  border-r-1 border-l-1  bg-white "
        >
        <img src='/icons/user.png' className=' m-auto w-[40px]'/>
        <h6 className='absolute top-0 px-3 py-1 text-green'>{carts.length}</h6>
      </button>



      
 <button 
        onClick={()=>setshowbasket(!showbasket)} 
        className=" z-100   w-[30%] h-[48px]  border-r-1 border-l-1  bg-white "
        >
        <img src='/icons/home.png' className=' m-auto w-[40px]'/>
        <h6 className='absolute top-0 px-3 py-1 text-green'>{carts.length}</h6>
      </button>

 <button 
        onClick={()=>setshowbasket(!showbasket)} 
        className=" z-100   w-[30%] h-[48px]  border-r-1 border-l-1  bg-white "
        >
        <img src='/icons/redfav.png' className=' m-auto w-[40px]'/>
        <h6 className='absolute top-0 px-3 py-1 text-green'>{carts.length}</h6>
      </button>


          </div>













    
        <div className={`
            ${showbasket ? 'flex translate-y-0  inset-0  opacity-100 bottom-0  ' 
                : 'hidden translate-y-[-1200px] ease-in-out '}
            
            fixed top-0 right-0 left-0 
            transition-transform duration-300 ease-in-out 

            

         w-full flex-col md:w-[84%] rounded-md   m-auto 
    flex md:flex-row flex-wrap  content-center  

        `}>
     

    <div className='w-full md:w-[50%] flex flex-col justify-between bg-white 
    overflow-y-auto max-h-[70vh]  
        shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.8)]
    '>





 <button 
        onClick={()=>setshowbasket(!showbasket)} 
        className="z-90 mb-4 px-4 py-2 text-lg text-red text-right rounded"
      >
        X
      </button>



        {carts.map((item:CartProductInterfaceSlice)=>(
           <div className='p-4 flex flex-col content-center items-center md:flex-row ' key={item.id}>
            


            <div className='m-auto text-center text-black flex flex-col '>

                
            <div className='m-auto text-center text-black flex flex-col '>
                
                <img className="w-[60px] h-[55px]" src={item.image}/>
            </div>

              <h1 className='text-black truncate w-64'>{item.title} </h1>
             
            <h5 className='p-2 rounded-md font-extrabold text-green-800'>${item.price} &nbsp; x &nbsp; {item.quantity}</h5>



                </div>


            <div className='flex flex-row justify-center gap-6 '>
            <span className='py-3'>$ {item.price * item.quantity}</span>
            <button onClick={()=>dispatch(changeQuantityProduct({id:item.id,change:-1}))} className='btn border p-2 rounded-md font-bold cursor-pointer shadow '>-</button>
            <button onClick={()=>dispatch(changeQuantityProduct({id:item.id,change:+1}))} className='btn border p-2 rounded-md font-bold cursor-pointer shadow '>+</button>
            </div>



            </div> 
        ))}

    </div>



{/* side2 */}

    <div className=' flex flex-row justify-between   content-center items-center w-full md:w-[50%] bg-green-500 p-3 gap-5'>

   <h1 className='pl-5'>total price : $ {totalCalculator()} </h1>
 <button  onClick={()=>{dispatch(clearCart()) , alert(" successfully done  ")}} className='w-[100px] btn border p-2 rounded-md font-bold cursor-pointer shadow '>pay</button>
 <button onClick={()=>dispatch(clearCart())} className='btn border p-2 rounded-md font-bold cursor-pointer shadow '>empty basket</button>
   
    </div>
           


    </div>
    </>
  )
}

export default Carts