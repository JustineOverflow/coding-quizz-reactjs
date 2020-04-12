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
                <div className="home-welcome">
                    <h1 className="home-welcome-title">Welcome to this</h1>
                    <h1 className="home-welcome-subtitle">coding quiz</h1>
                    <img className="home-welcome-image" src="pictures/hello.jpg" alt="hello world"/>
                </div>

                <div className="home-rules">
                    <div>
                        <h3 className="home-rules-title">The rules are simple:</h3>
                        <div className="home-rules-list">
                            <li className="home-rules-list-item"> Select your answer</li>
                            <li className="home-rules-list-item"> Right answer: you get 1 point</li>
                            <li className="home-rules-list-item"> Wrong answer: you do not lose any points</li>
                            <li className="home-rules-list-item"> There is a total of 10 points</li>
                        </div>
                    </div>
                </div>
                <div className="home-start">
                    <i className="arrow fas fa-arrow-circle-down" aria-hidden="true"></i>
                    <div>
                        <button className="home-start-button">
                            <Link to="/quiz">Start the quiz</Link>
                            <Route path="/quiz" exact component={Quiz}/>
                        </button>
                    </div>
                </div>

            </section>
        );
    }
}

export default Home;