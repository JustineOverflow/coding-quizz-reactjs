import React from "react";
import Quiz from "../Quiz/Quiz";
import Home from "../Home/Home";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";

function EndGame(props) {

    return (
        <section className="endgame">
            <header>
                <nav class="home-icon">
                    <Link to="/"><i className="home-icon fas fa-home"></i></Link>
                </nav>
            </header>
            <div className="home">
                <h1>The quiz is over! </h1>
                <i className="endgame-icon far fa-laugh-beam"></i>
                <h3 className="endgame-score">Your total is score is:</h3>
                <div>
                    <span className="endgame-count">{props.finalScore}</span> out of <span
                    className="endgame-total">20</span>
                </div>
            </div>

            <a href={`whatsapp://send?text=I%20did%20${props.finalScore}%20on%20this%20fun%20coding%20quiz!%20Can%20you%20beat%20my%20score%3F%20`} data-event-category="Social" data-event-action="Share:Whatsapp">Share on Whatsapp</a>
                {/*<nav>*/}
                {/*    <Link to="/">Bring me back home</Link>*/}
                {/*    <Route exact={true} path="/" component={Home}/>*/}
                {/*</nav>*/}
        </section>
    )
}


export default EndGame;