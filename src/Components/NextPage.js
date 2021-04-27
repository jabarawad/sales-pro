import React from 'react';
import { Link } from 'react-router-dom';
//import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
//import { BrowserRouter as Router } from 'react-router-dom';
import "./NextPage.css";



function NextPage(){

    return(
        <div class="container3">
            <div class="row row-no-gutters">
                <div class="col-xs-1 col-sm-2 col-md col-lg"></div>
                <div class="col-xs-10 col-sm-8 col-md col-lg">
                    <div class = "button-box3">
                        <button id="nextSet" type = "button" onclick= "location.href = '../Set2/set2.html';"> Continue </button>
                        <button id="prevSet" type = "button" onclick= "location.href = '../Set1/set1.html';"> Go Back </button>
                    </div>
                </div>
                <div class="col-xs-1 col-sm-2 col-md col-lg"></div>
            </div>
        </div>
    )
}

export default NextPage;