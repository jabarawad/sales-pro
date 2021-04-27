import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Set1 from './Components/Set1'
import NextPage from './Components/NextPage'

function App() {   
    return(
        <Router>
            <Switch>
                <Route path="/Dashboard" component={Dashboard} />
                <Route path="/Set1" component={Set1} />
                <Route path="/NextPage" component={NextPage} />
                <Route exact path="/" component={Home} />
            </Switch>
            
        </Router>
    )

}

export default App;