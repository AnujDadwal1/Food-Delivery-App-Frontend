import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartslice";
import { useDispatch } from "react-redux";


const RestaurantMenu = () => {
    const { resid } = useParams(); 
    const { restaurant, menuRestaurant, loading, error } = useRestaurant(resid);   
    const dispatch = useDispatch();
    const addFoodItem = (item)=>{
        dispatch(addItem(item));
    }
    if (loading) return <Shimmer />;
    if (error) return <div>Error loading restaurant details.</div>;

    return (
        <div className="flex justify-center items-center">
            <div className="w-[950px] bg-[#f9f9f9] rounded-[8px] p-[20px] mb-[20px] shadow-md">
                <h1>Restaurant id : {resid}</h1>
                <h2>{restaurant?.name}</h2>
                <img className="w-full max-w-[410px] h-auto rounded-[8px] mb-[10px]"
                src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt={restaurant?.name} />
                <h3>{restaurant?.areaName}</h3>
                <h3>{restaurant?.avgRating} Stars</h3>
                <h3>{restaurant?.area}</h3>
                <h3>{restaurant?.costForTwoMessage}</h3>
            </div>
            <div className="flex flex-col bg-white rounded-[8px] p-[20px] shadow-md h-auto">
                <h1 className="text-[24px] ">Menu</h1>
                <ul className="list-disc list-inside">
                    {menuRestaurant.length === 0 ? (
                        <li>No items available</li>
                    ) : (
                        menuRestaurant.map((menuItem, index) => (
                            <li className="mb-[5px]" key={index}>{menuItem.name} - 
                            <button className="p-1 text-sm bg-green-50 border-[1px] border-black rounded-[10%]" onClick={()=>addFoodItem(menuItem)}>Add</button></li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;