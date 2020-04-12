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
                    <Link to="/"><i className="endgame-backhome fas fa-home"></i></Link>
                </nav>
            </header>
            <div className="endgame">
                <h1 className="endgame-title">The quiz is over! </h1>
                <div className="endgame-score">
                    <p className="endgame-score-announce">Your total is score is:</p>
                    <span className="endgame-score-count">{props.history.location.state.finalScore}</span> out of <span
                    className="endgame-score-total">{props.history.location.state.total}</span>
                    <a className="share-call"
                       href={`whatsapp://send?text=I%20did%20${props.finalScore}%20on%20this%20fun%20coding%20quiz!%20Can%20you%20beat%20my%20score%3F%20`}
                       data-event-category="Social" data-event-action="Share:Whatsapp"><i className="endgame-score-whatsapp fab fa-whatsapp"></i></a>
                </div>

            </div>

            <div className="share">

            </div>
        </section>
    )
}


export default withRouter(EndGame);