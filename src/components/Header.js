import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// const loggedInUser = () =>{
//   //API call to check authentication
//   return true;
// }

export const Title = () =>(
    <a href="/">
        
  <img
  className="h-28 p-2" data-testid="logo"
  alt="logo"
  src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
  />
  </a>
);


const Header = () =>{
// const [title,setTitle] = useState('Food Villa');

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();

const {user} = useContext(UserContext);

const cartItems = useSelector(store => store.cart.items);

    return(
           <div className="flex justify-between bg-pink-400 shadow-md sm:bg-blue-50 md:bg-yellow-50">
                <Title/>
                {/* <h1>{title}</h1>
                <button onClick={()=> setTitle("New Food App")}>Title change</button> */}
                <div className="nav-items">
                   <ul className="flex py-10 px-5">
                   <Link to= "/">
                   <li className="px-5">Home</li>
                       </Link>
                       <Link to= "/about">
                       <li className="px-5">About</li>
                       </Link>
                       <Link to= "/contact">
                       <li className="px-5">Contact</li>
                       </Link>
                      <Link to= "/cart">
                       <li className="px-5" data-testid="cart">Cart - {cartItems.length}</li>
                       </Link>
                       <Link to= "/instamart">
                        <li className="px-5">Instamart</li>
                       </Link>
                   </ul>
                </div>
                <h1 data-testid="online-status">{isOnline? 'Yes' : 'No'}</h1>
                <h1 className="p-10 font-bold text-red-600">{user.name}</h1>
                {
                  (isLoggedIn ? <button onClick={()=> setIsLoggedIn(false
                    )}>Logout</button> : <button onClick={()=> setIsLoggedIn(true
                      )}>Login</button>)
                }
                
                
           </div>
    )
     };
   
export default Header;