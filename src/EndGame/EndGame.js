import React from "react";
import Quiz from "../Quiz/Quiz";
import Home from "../Home/Home";
import {Route} from "react-router";
import {Link} from "react-router-dom";

function EndGame(props) {
    return (
        <section className="endgame">
            <div className="home">
                <h1>The quiz is over! </h1>
                <i className="endgame-icon far fa-laugh-beam"></i>
                <h3 className="endgame-score">Your total is score is:</h3>
                <div>
                    <span className="endgame-count">{props.finalScore}</span> out of <span
                    className="endgame-total">20</span>
                </div>
            </div>
                <h3 className="action-call"> Can you do better ? </h3>
                <button className="action-start">
                    <Link to="/quiz">Yes, Start again!</Link>
                    <Route path="/quiz" exact component={Quiz}/>
                </button>
                <button className="action-home">
                    <Link to="/">No, bring me back home</Link>
                    <Route path="/" exact component={Home}/>
                </button>
        </section>
    )
}


export default EndGame;