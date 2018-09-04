
import React, { Component } from 'react';
// import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Hello from "./Hello";
import Home from "./Home";

function Routes(props) {
    return(
        <Switch>
            <Route exact path="/hello" component={Hello} />
            <Route path="/" component={Home} />
        </Switch>
    )
    
}

export default Routes

