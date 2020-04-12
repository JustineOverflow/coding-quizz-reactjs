import React from "react";
import Quiz from "../Quiz/Quiz";
import Home from "../Home/Home";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom'

function EndGame(props) {

    return (
        <section>
            <header>
                <nav>
                    <Link to="/"><i className="endgame-icon fas fa-home"></i></Link>
                </nav>
            </header>
            <div className="endgame">
                <h1>The quiz is over! </h1>
                <i className="smiley far fa-laugh-beam"></i>
                <h3 className="endgame-score">Your total is score is:</h3>
                <div>
                    <span className="endgame-count">{props.history.location.state.finalScore}</span> out of <span
                    className="endgame-total">{props.history.location.state.total}</span>
                </div>
            </div>

            <div className="share">
                <div>
                    <i className="whatsapp fab fa-whatsapp"></i>
                </div>
                <a className="share-call"
                   href={`whatsapp://send?text=I%20did%20${props.finalScore}%20on%20this%20fun%20coding%20quiz!%20Can%20you%20beat%20my%20score%3F%20`}
                   data-event-category="Social" data-event-action="Share:Whatsapp">Share my result with my friends on
                    Whatsapp! </a>
            </div>
        </section>
    )
}


export default withRouter(EndGame);