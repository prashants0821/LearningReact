import React from "react";

class Profile extends React.Component {

constructor(props) {
    super(props);
    // Create State
    this.state = {
        name:"Dummy Name",
        location: "Dummy Location",
    }
    console.log("Child - Constructor");
}

async componentDidMount(){
    // const data = await fetch("https://api.github.com/users/prashant0821");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //     userInfo:json,
    // });
    this.timer = setInterval(() =>{
        console.log("React");
    },1000)
    console.log("Child -componentDidMount");
}

componentDidUpdate(){
    console.log("componentDidUpdate");
}

componentWillUnmount(){
    clearInterval(this.interval)
    console.log("componentWillUnmount");
}

 render () {
    // const {count} = this.state;
    console.log("Child-render");
    return(
    <div>
        <h1>Profile Component</h1>
        <img src={this.state?.userInfo?.avatar_url}/>
    <h1>Profile class component</h1>
    <h2>Name:{this.state?.userInfo?.login}</h2>
    <h2>Location:{this.state?.userInfo?.location}</h2>
    {/* <h2>Count:{count}</h2> */}
    <button onClick={() =>{
        this.setState({
            count: 1,
            count2: 2,
        });
    }}>Count</button>
    </div>
    );
 }


}

export default Profile;

/*
*
*child Constructor
*child render
*child componentDidMount
*
*API Call
*set State
*
*<Update Cycle>
*render
*
*
*
*
*
*/