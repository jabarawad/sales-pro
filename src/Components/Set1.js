import React from 'react';
import { Link } from 'react-router-dom';
//import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
//import { BrowserRouter as Router } from 'react-router-dom';
import "./Set1.css";

function Set1(){
    const history = useHistory();
    function handleClick(qNum){
        console.log(qNum)
    }
    return(
    <div class="container2">
        <div class="row row-no-gutters">
            <div class="col-xs-1 col-sm-2 col-md col-lg"></div>
            <div class="col-xs-10 col-sm-8 col-md col-lg">
                <div class = "button-box2">
                    <div class="Question">Topic 1</div>

                    <button id="Question1" type = "button" class = "toggle-btn2" onClick={()=>handleClick("Question1")}> Question1 </button>
                    <button id="Question2" type = "button" class = "toggle-btn2" onClick={()=>handleClick("Question2")}> Question2 </button>
                    <button id="Question3" type = "button" class = "toggle-btn2" onClick={()=>handleClick("Question3")}> Question3 </button>
                    <button id="Question4" type = "button" class = "toggle-btn2" onClick={()=>handleClick("Question4")}> Question4 </button>
                </div>
            </div>
            <div class="col-xs-1 col-sm-2 col-md col-lg"></div>
        </div>
    </div>
    )
}

export default Set1;