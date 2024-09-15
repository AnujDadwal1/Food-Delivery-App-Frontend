import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resid) => {
    const [restaurant, setRestaurant] = useState(null);
    const [menuRestaurant, setMenuRestaurant] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const getRestaurantInfo = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${FETCH_MENU_URL}${resid}`);
                const json = await response.json();
               console.log("API Response:", json);                
               setRestaurant(json?.data?.cards[2]?.card?.card?.info);
                const itemCards = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
                
                if (itemCards) {
                    const extractedItems = itemCards.flatMap(itemCard => itemCard?.card?.info);
                    setMenuRestaurant(extractedItems);
               
                    console.log("Extracted menu items:", extractedItems);
                } else {
                    setMenuRestaurant([]);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getRestaurantInfo();
    }, [resid]);

    return { restaurant, menuRestaurant, loading, error };
};

export default useRestaurant;
