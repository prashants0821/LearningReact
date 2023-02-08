
/*
* 
* 
* HMR- Hot Module Replacement
* File Watcher algorithm - It checks if there is any change in file uses C++
* BUNDLING
* MINIFY
* 0 Console Logs - Parcel cleans the code
* Dev and production build
* Super fast build algorithms
* Image optimization
* Caching while development 
* Compression
* Compatible with older versions of browsers
* HTTPS on dev 
* manages port number
* Consistent hashing algorithm 
* Default
* Zero Config 
* Tree Shaping - 
*
*Transitive Responses
*/ 


import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Title } from "./Header";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { IMG_CDN_URL } from "./config";
import RestaurantCard from "./RestaurantCard";
// import About from "./About";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Error from "./Error";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import Profile from "./Profile";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
// import Instamart from "./Instamart";
import { Provider } from "react-redux";
import store from "../utils/store";
import Cart from "./Cart";


 const Instamart = lazy(()  => import("./Instamart") );

const About = lazy(() => import("./About") );

//React.Fragment
  const AppLayout = () =>{

  

    const[user, setUser] = useState({
      name:"Prashant",
      email:"prashantsamant5@gmail.com",
    })

   

    return(
    // <>
    //     <Header/>
    //     {/*{Outlet} */}
    //     <Outlet/>
    //     {/* <About/>
    //     <Body/>
    //     <Contact/> */}
    //     <Footer/>
    //     </>
   
   <Provider store={store}> 
     <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
        </UserContext.Provider>
        </Provider>

    );
  };


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <Error/>,
      children: [
       
        {
          path: "/about",
          element: <Suspense fallback={<h1>Loading</h1>}>
            <About/>
          </Suspense>,
          children: [
            {
            path: "profile",
            element: <Profile/>,
          },
        ],
        },
        {
          path: "/",
          element:<Body />,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu/>,
        },
        {
          path: "/instamart",
          element:<Suspense fallback={<Shimmer/>}>
            <Instamart/>
            </Suspense> ,
        },
        {
          path : "/cart",
          element: <Cart/>
        }
      ]
    },
 
   
  ])


    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<RouterProvider router={appRouter}/>);
