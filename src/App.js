import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/Home';
import Quiz from './Quiz/Quiz';
import {Switch} from "react-router";


function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/quiz" component={Quiz}/>
        </Switch>
    );
}

export default App;
