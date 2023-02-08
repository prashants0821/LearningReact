import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";


const Cart = () =>{
    const cartItems = useSelector(store => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    return(
         <div>
        <h1 className="font-bold text-xl">Cart Items - {cartItems.length}</h1>
        <button className="p-2 m-2 bg-green-100" onClick ={()=> handleClearCart()}>Clear Cart</button>
        <div className="flex">
        {cartItems.map(item => <FoodItem key={item.id} {...item}/>)}
            </div>
      

    </div>
    );

}

export default Cart;