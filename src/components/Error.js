import { useRouteError } from "react-router-dom";
import Errorimg from "../assets/Errori.jpg"
const Error = () =>{
    const err = useRouteError();
    return(
        <div className="flex flex-col justify-center items-center">
            <h1>Oops!!!!!!!!!!!!!!!!!!🤔</h1>
            <h2>Somthing went wrong</h2>
            <img className="w-[370px] h-[400px]" alt="Errorhai" src={Errorimg}></img>
            <h2 className="text-[xx-large] text-[#f44b2d]">{err.status+" : "+err.statusText}</h2>
        </div>
    ) 
}
export default Error;