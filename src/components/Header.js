import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/zomato.png"
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const LoggedInUser = () =>{
  return true;
} 


export const Title = () => (
    <a target="block" href="https://www.zomato.com/india">
    <img data-testid='logo'  className="h-24 p-2 rounded-[20px]" alt="Zomato"
    src={Logo}></img>
    </a>
  );
  
  const Header = () => { 
    const isOnlin = useOnline();
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const {user} = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items); 
     console.log(cartItems);
    return(
    <div className="flex justify-between bg-pink-50 shadow-sm rounded-[20px]">
      <Title />
      <div className="nav-items">
       <ul className="flex py-10">
        
        <li className="px-2  text-l"><Link to="/">Home</Link></li>             
        <li  className="px-2 text-l"> <Link to="/about">About</Link></li>                  
         <li  className="px-2 text-l"><Link to="/contact">Contact</Link></li>
         <li  className="px-2 text-l"><Link to="/instamart">Instamart</Link></li>
         <li  className="px-2 text-l" data-testid="cart"><Link to="/cart">Cart</Link> - {cartItems.length} items</li>  
       </ul>
      </div> 
      <h1 data-testid="online-status" className="pt-[40px]">{isOnlin?"🟢":"🔴"}</h1>
      <h1 className="pt-[40px] font-bold ">{user.name}</h1>
      {isLoggedIn?
      (<button className="m-4 flex justify-center items-center p-4 bg-[#3b7beb] text-white border border-[#423838] rounded-[5px] cursor-pointer h-[45px] mt-[30px] hover:bg-[#c63030] hover:border-[#9a2b2b]"
         onClick={()=>setIsLoggedIn(false)}>Logout</button>)
      : (<button className="m-4 flex justify-center items-center p-4 bg-[#3b7beb] text-white border border-[#423838] rounded-[5px] cursor-pointer h-[45px] mt-[30px] hover:bg-[#c63030] hover:border-[#9a2b2b]"
         onClick={()=>setIsLoggedIn(true)}>Login</button>)
      } 
    </div>
    );
};
 
export default Header;