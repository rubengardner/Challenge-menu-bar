import React, { Component } from 'react'
import css from './css/NavBarForm.module.css'

export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

    updateLogin = () =>{
        this.state.isLoggedIn ? 
        (this.setState(
            {isLoggedIn: false}
        )):
        (this.setState(
            {isLoggedIn: true}
        ))
    }

    render() {
    return (
      <div  className = {css.NavBar}>
        <h1>My Gallery</h1>
        <div>
            {this.state.isLoggedIn ?
                (<form>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username"></input>
                    <label for="password">Password:</label>
                    <input type="text" id="password" name="password"></input>
                    <input onClick={this.updateLogin} type="submit" value="Submit"></input>
                </form>) :
                (<button onClick={this.updateLogin}>Log In</button>) }
        </div>
      </div>

    )
  }
}

export default NavBarForm