import React from "react";
class Profile extends React.Component{
    constructor(props){
     super(props);
     this.state={
        userInfo:{
        name: "Dummy Name",
        followers : "Dummy Location", 
      },
     };
     console.log("child - constructor" + this.props.name);
    }

 async componentDidMount(){
        const data = await fetch("https://api.github.com/users/AnujDadwal1");
        const json = await data.json();
        this.setState({
         userInfo : json,
        })

        // this.timer = setInterval(()=>{
        //  console.log("Anuj Op");
        // },1000);
        console.log("child - componentDidMount" + this.props.name);
    }

    componentDidUpdate(prevProps , prevState){
        // if(this.state.count !== prevState.count || ){

        // }
        console.log("component did update");
    }

    componentWillUnmount(){
        // clearInterval(this.timer);
        console.log("component will unmount");
    }


    render(){
        const {count} = this.state;
        console.log("child - render" + this.props.name); 
        return(
            <div>
                <h1>Profile Class Component</h1>
                <img src={this.state.userInfo.avatar_url}/>
                <h2>Name : {this.state.userInfo.login}</h2>
                <h2>Followers : {this.state.userInfo.followers}</h2>                
            </div>            
        ); 
    }
}

export default Profile;
