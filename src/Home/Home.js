import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Quiz from '../Quiz/Quiz'

class Home extends Component {
    render() {
        return (
            <section className="home">
                <h1 className="home-welcome">Welcome to this coding quiz</h1>
                <h3>Have some fun and test your coding knowledge with this quiz</h3>
                <h3  className="home-rules">The rules are simple:</h3>
                <li> Select your answer</li>
                <li className="home-rules-list"> If it is the right answer, you get one point</li>
                <li className="home-rules-list"> If it is not the correct answer, you do not get points</li>
                <li className="home-rules-list"> There is a total of 20 points</li>

                <h3 className="home-ready">Ready ? Let's go!</h3>

                <Link to="/quiz">Start the quiz</Link>
                <Route path="/quiz" exact component={Quiz}/>

            </section>
        );
    }
}

export default Home;