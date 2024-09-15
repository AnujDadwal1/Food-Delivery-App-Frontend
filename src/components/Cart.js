import { useDispatch, useSelector } from "react-redux";
import Fooditem from "./Fooditem";
import { clearCart } from "../utils/cartslice";

const Cart=()=>{
    const dispatch = useDispatch();
    const handleClearCart=()=>{
      dispatch(clearCart());
    }
    const cartItems =useSelector((store)=>store.cart.items);   
    return(
        <div>            
            <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
            <button className="bg-green-100 p-2 m-5" onClick={()=>handleClearCart()}>Clear Cart</button>
            <div className="flex flex-row gap-4">
            {cartItems?.map((item)=> (<Fooditem key={item.id} {...item}/>))}           
            </div>
        </div>
    )
}
export default Cart;