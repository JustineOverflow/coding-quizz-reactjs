import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/Home';
import Quiz from './Quiz/Quiz';
import EndGame from './EndGame/EndGame';
import {Switch} from "react-router";


function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/quiz" component={Quiz}/>
            <Route path="/end-game" component={EndGame}/>
        </Switch>
    );
}

export default App;
