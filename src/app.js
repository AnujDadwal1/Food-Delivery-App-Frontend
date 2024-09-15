import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/about";
import Error from "./components/Error";
import Contact from "./components/contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider ,Outlet } from "react-router-dom";
import Profile from "./components/Profile";
import Shimmer from "./components/shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/Store";
import Cart  from "./components/Cart";


const Instamart = lazy(()=> import("./components/instamart"));
const About = lazy(()=>import ("./components/about"));
const AppLayout = () =>{
    
     const [user,setUser]=useState({
          name : "Anuj Dadwal",
          email : "anujdadwal@gmail.com",     
     })

     useEffect(()=>{

     },[])
     return(
          <Provider store={store}>
      <UserContext.Provider value={{
          user: user,
          setUser: setUser,
      }}>
      <Header/>
      {}
      <Outlet/> 
      <Footer/>
      </UserContext.Provider>
      </Provider>
     );
};

const appRouter = createBrowserRouter([
     {
          path :"/",
          element : <AppLayout />,
          errorElement : <Error />,
          children : [
               {
                    path:"/",
                    element: <Body />,
               },
               {
                    path:"/about",
                    element:(<Suspense fallback = {<h1>Loading...</h1>}>
                         <About/>
                    </Suspense>) ,
                    children : [
                    {
                       path: "profile",
                       element : <Profile />,  
                    }                          
                    ]
               },
               {
                    path:"/contact",
                    element: <Contact />,
               },
               {
                    path:"/restaurant/:resid",
                    element: <RestaurantMenu/>,
               },
               {
                    path:"/instamart",
                    element:( <Suspense fallback={<Shimmer/>}>
                         <Instamart/>
                    </Suspense> ),
               },
               {
                    path:"/cart",
                    element:<Cart/>
               }
          ]
     },
     
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);  

/**
 * AppLayout
 * (state=user)
 * - <Body user ={user}/>
 *    -RestaurantCard user={user}
 *     -<h4>{user}<h4>     
 * 
 *   PROPS DRILLING 
 */