import { createContext } from "react";

const UserContext = createContext({
    user:{
    name : "Dummy",
    email : "dummyemail@gmail.com",
}})

export default UserContext;