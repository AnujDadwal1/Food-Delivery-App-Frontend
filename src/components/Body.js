import {restaurantList} from "../constants";
import RestCard from "./RestaurantCard";
import { useState,useEffect,useContext} from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";


const Body = () =>{
  const[allRestaurants,setAllRestaurants] = useState([]);
  const [fliteredRestaurants,setfliteredRestaurants] = useState([]);
  const [searchInput,setSearchInput] = useState("");
  const{user,setUser}=useContext(UserContext);
  useEffect(()=>{
   getRestaurants();
  },[]);

  // async function getRestaurants(){
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.47570&lng=76.59010&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );
  //   const json = await data.json();
  //   console.log(json);
  //   setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   setfliteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  // }
  
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.47570&lng=76.59010&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantCard = json?.data?.cards.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
    );
  
    if (restaurantCard) {
      const restaurants = restaurantCard.card.card.gridElements.infoWithStyle.restaurants;
      setAllRestaurants(restaurants);
      setfliteredRestaurants(restaurants);
    } else {
      console.error("Restaurants data not found in the response");
    }
  }  

  const isOnline = useOnline();
  if(!isOnline){
   return <h1 className="font-bold text-xl">🔴 OFFLINE , Please check your internet connection!!</h1>;
  } 
  
  if(!allRestaurants) return null;
  return(allRestaurants?.length===0)?<Shimmer/> :(
        <>
        <div className="search-container p-5 bg-pink-50 my-3 rounded-[20px]">
          <input 
          type="text" 
          className="p-[10px] border-[1.4px] border-[#3e3c3c] rounded-[5px] w-[200px] hover:shadow-lg focus:bg-blue-50 " 
          placeholder="Search" 
          value={searchInput}
          onChange={(e)=>{
           setSearchInput(e.target.value);
          }}
          />
          <button data-testid="search-btn" className=" p-[10px_20px] bg-[#007bff] text-white border border-blue-500 rounded-[5px] cursor-pointer ml-[5px]
                               hover:bg-[#dce3eb] hover:text-black hover:border-[#413230]"
          onClick={()=>{
          const data =  filterData(searchInput,allRestaurants);
          setfliteredRestaurants(data);
          }}
          >Search</button>
          <input className="ml-3" value={user.name} onChange={
            e=> setUser({
              name:e.target.value,
              email:"newemail@gmail.com",
            })
            }></input>
        </div>
        <div className="flex flex-wrap justify-between gap-4 p-2">
        {fliteredRestaurants.map((restaurant) => {
            return (
            <Link to={"/restaurant/"+restaurant.info.id } key={restaurant.info.id}>
              <RestCard {...restaurant.info} user={user}/></Link>
            );
        })} 
      </div>
      </>
    );
  };
  export default Body;