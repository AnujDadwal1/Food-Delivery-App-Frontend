import { IMG_CDN_URL } from "../constants";

const truncateDescription = (description) => {
    const periodIndex = description.indexOf('.');
    return periodIndex !== -1 ? description.slice(0, periodIndex + 1) : description;
};
const Fooditem = ({
    name,
    description,
    imageId,
    price,
    category,
     }) =>{
      const contentToShow = description ? truncateDescription(description) : category;
   return(
    <div className="px-2 ml-3  w-[200px] shadow-lg bg-slate-50 rounded-md">
      <img className="w-full h-[42%] rounded-[11%]" src={
         IMG_CDN_URL + 
         imageId
      }/>
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{contentToShow}</h3>
      <h4>Rupees: {price/100} </h4>      
    </div>
  ) 
}
export default Fooditem;


