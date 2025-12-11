import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name:"carts" ,
    initialState:[] , //{id :1 , titlle:"book" , quantity:1}
   
    reducers:{

        addToCart:( state , action )=>{

            let oldProduct = state.find((product)=>{
                return product.id == action.payload.id
            })

            if(oldProduct){
                oldProduct.quantity+=1
            }

            else{
                 state.push({...action.payload , quantity:1}) //spop used to add new property quantity
            }


        } ,


        removeFromCart:(state,action)=>{
            return state.filter((product)=>product.id !=action.payload)
        } ,




        changeQuantityProduct:(state,action)=>{
            let {id,change} = action.payload  // we have to send product id and change num throughtout a btn
            let exsistedProduct = state.find((product)=>{
                return product.id == id
            })
            exsistedProduct.quantity+=change
            

        } ,


        clearCart:(state)=>[] 

        
    }
})
export default cartSlice