import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const RestaurantMenu =()=>{
    const {resId} = useParams();
    // const {id} = params;
    // console.log(params);

    // const[restaurant, setRestaurant] = useState(null);

    const restaurant = useRestaurant(resId);

    const dispatch = useDispatch();

    // const handleAddItem = ()=>{
    //     dispatch(addItem("Grapes"))
    // }
    
    const addFoodItem = (item) =>{
        dispatch(addItem(item));
    }

    if(!restaurant ){
     return <Shimmer/>
    ; }

    return (
        <div className="flex">
        <div>
            <h1>Restaurant id: {resId}</h1>
            <h2>{restaurant?.name}</h2>
            <img src= {IMG_CDN_URL + restaurant.cloudinaryImageId}/>
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating}</h3>
            <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
        {/* <div>
            <button className="p-2 m-2 bg-green-200" 
            onClick={() => handleAddItem()}
            >
                Add Item</button>
        </div> */}
        <div className="p-5">
            <h1>Menu</h1>
            <ul>{
                Object.values(restaurant?.menu?.items).map((item) =>
                <li key={item.id}>{item.name}  <button className="p-1 bg-green-50"
                onClick={() => addFoodItem(item)}
                >Add</button></li>)
                }
            </ul>
           
        </div>
        </div>
    )
}
export default RestaurantMenu;