import React from 'react';
import { Link } from 'react-router-dom';
//import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
//import { BrowserRouter as Router } from 'react-router-dom';
import "./Dashboard.css";

/* class Dashboard extends Component{ */
    function Dashboard () {
        const history = useHistory();
        function handleClick(){
            history.push("./Set1")
        }
        return(
            <div class="row row-no-gutters">
                <div class="col-xs-1 col-sm-2 col-md col-lg"></div>
                <div class="col-xs-10 col-sm-8 col-md col-lg">
                    <div class = "button-box1">
                        <button type = "button" class = "toggle-btn1" onClick= {handleClick}> Sales Executive </button>
                        <button type = "button" class = "toggle-btn1" onClick= {handleClick}> Account Executive </button>
                        <button type = "button" class = "toggle-btn1" onClick= {handleClick}> Sales Representative </button>
                    </div>
                </div>
                <div class="col-xs-1 col-sm-2 col-md col-lg"></div>
            </div>
        )
}

export default Dashboard;
