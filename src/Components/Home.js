import React from 'react';
import { Link } from 'react-router-dom';
//import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
//import { BrowserRouter as Router } from 'react-router-dom';
import "./Home.css";


/* class Home extends Component {
 */   /*  var x = document.getElementById("login");
    var y = document.getElementById("signup");
    var z = document.getElementById("btn");

    function signup(){
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "110px";
    }
    function login(){
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0px";
        } */
function signup(){
    console.log("signup clicked")
    var x = document.getElementById("login");
    var y = document.getElementById("signup");
    var z = document.getElementById("btn");
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    console.log("login clicked")
    var x = document.getElementById("login");
    var y = document.getElementById("signup");
    var z = document.getElementById("btn");
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

//class Home extends React.Component {
function Home(){
    const history = useHistory();
    function handleClick(){
        history.push("./Dashboard")
    }
//    render(){
        return (
            <div class = "hero">
                <div class = "form-box">
                    <div class = "button-box">
                        <div id = "btn"></div>
                        <button type = "button" class = "toggle-btn" onClick={login}> Log In </button>
                        <button type = "button" class = "toggle-btn" onClick={signup}> Sign Up </button>

                    </div>
                    {/*<!-- Log in page  --> */}
                    <div id="login" class = "input-group">
                        <input type = "text" class = "input-field" placeholder="Email" required></input>
                        <input type = "text" class = "input-field" placeholder="Password" required></input>
                        <input type = "checkbox" class = "check-box"></input>
                        <span>Remember Password</span>
                        <button type = "submit" class = "submit-btn" onClick={handleClick}>Log In</button>
                    </div>

                    {/*<!-- sign up page --> */}
                    <div id="signup" class = "input-group">
                        <input type = "text" class = "input-field" placeholder="Email" required></input>
                        <input type = "text" class = "input-field" placeholder="Password" required></input>
                        <input type = "text" class = "input-field" placeholder="Retype Password" required></input>

                        <input type = "checkbox" class = "check-box"></input>
                        <span>I agree to the terms and agreements</span>
                        <button type = "submit" class = "submit-btn">Sign Up</button>

                    </div>
                    
                </div>
            </div>
            
        );
//    }
}

export default Home;