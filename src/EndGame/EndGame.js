import React, {Component} from "react";
import {Route, Link} from 'react-router-dom';
import Quiz from "../Quiz/Quiz";

class EndGame extends Component {
    render() {
        return <h1>
            hello
            {/*The quiz is over! Your total is score is: {this.state.score} out of 20*/}
        </h1>
    }
}

export default EndGame;