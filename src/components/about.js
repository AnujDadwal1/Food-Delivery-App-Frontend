import { Outlet } from "react-router-dom";
import ProfileFunctionComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
   constructor(props){
      super(props);
    
    console.log("Parent - constructor")
   }

   
componentDidMount(){    
      console.log("Parent - ComponentdidMount");
   }


 render(){
   console.log("Parent - render");
   return(
      <div>
        <h1>About us page</h1>
        <UserContext.Consumer>
          {({user})=><h4 className="font-bold text-xl p-10">{user.name} - {user.email}</h4>}
        </UserContext.Consumer>
        <p>This is react live course Chapter 07 finding the path by Anuj 🚀🚀</p>
        {/* <ProfileFunctionComponent name={"Anuj"}  /> */}
        <Profile name={"First Child"}/>
       </div>
   ); 
 }
}
export default About;