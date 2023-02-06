// import { Outlet } from "react-router-dom";
import React from "react";
import ProfileFunctionalComponent from "./Profile";
// import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";


// const About2=()=>{
// return(
//     <div>
//         <h1>About us Page</h1>
//         <p>
//             {""}
//             This is Namaste React Live Chapter 7
//             </p>
//             <ProfileFunctionalComponent name={"Prashant"}/>
//             <Profile   name={"Prashant Samant"}/>
//     </div>
// )
// };

class About extends Component{
    constructor(props){
        super(props);
        
        console.log("Parent- constructor");
    }
    async componentDidMount(){
        //Best place to call API method
       
        console.log("Parent - componentDidMount");
    }
    render(){
        console.log("Parent-render");
        return(
            <div>
                <h1>About us Page</h1>
                <UserContext.Consumer>
                    {({user}) =>(
                    <h4 className="font-bold text-xl p-10">
                        {user.name} - {user.email}
                        </h4>)}
                </UserContext.Consumer>
                <p>
                    {""}
                    This is Namaste React Live Chapter 7
                    </p>
                    {/* <ProfileFunctionalComponent name={"Prashant"}/> */}
                    {/* <Profile   name={"Prashant Samant"}/> */}
                    <ProfileFunctionalComponent/>
            </div>
        )
    }
}
export default About;



/*
*
*Parent Constructor
*Parent Render
*   First Child- Constructor
*   First Child - Render
*   Second Child- Constructor
*   Second Child - Render
*   First Child - componentDidMount
*   Second Child - componentDidMount
*   Parent - componentDidMount
*

*/