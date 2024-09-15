import { useEffect, useState } from "react"; 
import { useActionData } from "react-router-dom";
const Profile = (props) =>{
    const[count,setCount]=useState(0);
    // useEffect(()=>{
    //    const timer = setInterval(()=>{
    //         console.log("Hello REact");
    //     },1000);
    //     return()=>{
            //  clearInterval(timer);
    //     } 
    // },[]);
    // console.log("render function");
    return(
        <div>
            <h2>Profile Component</h2>
            <h3>Name : {props.name}</h3>
            <h3>Count : {count}</h3>
            <button onClick={()=> setCount(1)}>Click me</button>
        </div>
    )
}

export default Profile;