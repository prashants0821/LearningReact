import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

// const loggedInUser = () =>{
//   //API call to check authentication
//   return true;
// }

export const Title = () =>(
    <a href="/">
        
  <img
  className="logo"
  alt="logo"
  src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
  />
  </a>
);


const Header = () =>{
// const [title,setTitle] = useState('Food Villa');

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();
    return(
           <div className="header">
                <Title/>
                {/* <h1>{title}</h1>
                <button onClick={()=> setTitle("New Food App")}>Title change</button> */}
                <div className="nav-items">
                   <ul>
                   <Link to= "/">
                   <li>Home</li>
                       </Link>
                       <Link to= "/about">
                       <li>About</li>
                       </Link>
                       <Link to= "/contact">
                       <li>Contact</li>
                       </Link>
                      
                       <li>Cart</li>
                       <Link to= "/instamart">
                        <li>Instamart</li>
                       </Link>
                   </ul>
                </div>
                <h1>{isOnline? 'Yes' : 'No'}</h1>
                {
                  (isLoggedIn ? <button onClick={()=> setIsLoggedIn(false
                    )}>Logout</button> : <button onClick={()=> setIsLoggedIn(true
                      )}>Login</button>)
                }
                
                
           </div>
    )
     };
   
export default Header;