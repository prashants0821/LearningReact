import { restaurantList } from "./config";
import RestaurantCard from "./RestaurantCard";
import { useState , useEffect , useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import{filterData} from "../utils/helper"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext";


const Body = () =>{
// const searchText = "KFC";


    const [allRestaurants,setAllRestaurants] = useState([]);
    const[filteredRestaurants,setFilteredRestaurants] = useState([]);
    const[searchText, setSearchText] = useState();  
    const {user,setUser} = useContext(UserContext);

  useEffect(()=>{
    getRestaurants();
  },[]);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);
    //optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  
  const isOnline = useOnline();

  if(!isOnline){
    return <h1>Offline please check your internet connection</h1>;
  }

  if(!allRestaurants) return null;


   
    return(allRestaurants.length === 0) ? <Shimmer/> : (
        <>
        <div className="search-container p-5 bg-pink-50 my-5">
            <input type="text"
             className="search-input "
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              />
             
              <button className="btn p-2 m-2 bg-purple-400 text-white rounded-lg" 
                onClick={()=>{
                //Need to filter the data
               const data =  filterData(searchText , allRestaurants);
               //update the state-restaurants
               setFilteredRestaurants(data);
              }}>Search</button>
             <input value={user.name} onChange={(e) =>
             setUser({
              ...user,
              name: e.target.value,
             
             })
            }></input>
            <input value={user.email} onChange={(e) =>
             setUser({
              email: "newmail@gmail.com",
             })
            }></input>
        </div>
       <div class="flex flex-wrap">
{ // Write here the restaurant not found code
    filteredRestaurants.map((restaurant) =>{
      return (
        <Link to={"/restaurant/" + restaurant.data.id}
        key={restaurant.data.id}>
           <RestaurantCard {...restaurant.data}  />
        </Link>
      )
    })
}
</div>
</>
    )
  }

  export default Body;