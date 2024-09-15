import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestCard = ({cloudinaryImageId,name,cuisines,avgRatingString}) =>{
    const{user}=useContext(UserContext);
  return(
    <div className="w-[200px] h-[360px] shadow-lg bg-slate-50 rounded-md">
      <img className="w-full h-[42%] rounded-[11%]" src={
         IMG_CDN_URL + 
         cloudinaryImageId
      }/>
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} Star</h4>
      <h5 className="font-bold ">{user.name}</h5> 
      <h5 className="font-bold ">{user.email}</h5>   
    </div>
  ) 
}
export default RestCard;


