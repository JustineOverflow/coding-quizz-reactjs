import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Quiz from '../Quiz/Quiz'

class Home extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            isOn: false
        }
    }

    render() {
        return (
            <section className="home">
                <h1 className="home-welcome">Welcome to this coding quiz</h1>
                <div className="home-container">
                    <div className="home-container-column1">
                        <h3 className="home-rules">The rules are simple:</h3>
                        <li className="home-rules-list"> Select your answer</li>
                        <li className="home-rules-list"> If it is the right answer, you get 1 point</li>
                        <li className="home-rules-list"> If the answer is wrong, you do not lose any points</li>
                        <li className="home-rules-list"> There is a total of 10 points</li>
                    </div>
                    <div className="home-container-column2">
                        <i className="arrow fas fa-arrow-circle-down"></i>
                        <button className="home-button">
                            <Link to="/quiz">Start the quiz</Link>
                            <Route path="/quiz" exact component={Quiz}/>
                        </button>
                        <i className="arrow fas fa-arrow-circle-up"></i>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;