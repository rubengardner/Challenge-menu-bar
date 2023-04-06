import React from 'react';
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            welcomeMessage : "Hello, guest!",
            buttonLog: "log in"
        }
    }

    handleClick(){
        this.setState((prevState, prevProps) => {
            return{
                welcomeMessage: prevState.welcomeMessage === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonLog: prevState.buttonLog ===  "log in" ? "log out" :  "log in",
            }
            
        })
    }

    render() {
        return(
            <div className={css.NavBar}>
                <h1> My Gallery</h1>
                <div>
                    <span>{this.state.welcomeMessage}</span>
                    <button onClick={() => this.handleClick()}>{this.state.buttonLog}</button>
                </div>
            </div>
        )
    }
}

export default NavBarSimple;