import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Quiz from '../Quiz/Quiz'

class Home extends Component {
    render() {
        return (
            <section className="home">
                <h1 className="home-welcome">Welcome to this coding quiz</h1>
                <div className="home-container">
                    <div className="home-container-column1">
                        <h3 className="home-container-column1-text">Have some fun and test your coding knowledge with this quiz</h3>
                        <i className="computer fas fa-laptop-code"></i>
                    </div>
                    <div className="home-container-column2">
                        <h3 className="home-rules">The rules are simple:</h3>
                        <li className="home-rules-list"> Select your answer</li>
                        <li className="home-rules-list"> If it is the right answer, you get one point</li>
                        <li className="home-rules-list"> If it is not the correct answer, you do not get
                            points
                        </li>
                        <li className="home-rules-list"> There is a total of 20 points</li>
                    </div>
                </div>

                <h3 className="home-ready">Ready ? Let's go!</h3>
                <i className="arrow fas fa-arrow-circle-down"></i>

                <button className="home-button">
                    <Link to="/quiz">Start the quiz</Link>
                    <Route path="/quiz" exact component={Quiz}/>
                </button>


            </section>
        );
    }
}

export default Home;