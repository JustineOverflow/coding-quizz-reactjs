import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import EndGame from "../EndGame/EndGame";
import Timer from "./Timer";
import Home from "../Home/Home";

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            question: {
                key: '??',
                name: '??',
                score: '??',
                choices: []
            },

            score: 0,
            count: 0,
            total: 10,

            isFinished: false,
        };
        this.onChoiceClicked = this.onChoiceClicked.bind(this)
    }

    componentDidMount() {
        this.loadQuestion()
    }


    loadQuestion() {
        if (this.state.count < this.state.total) {
            (async () => {
                let response = await fetch('http://127.0.0.1:5000/quiz');
                let question = await response.json();
                this.setState({
                    question,
                    count: this.state.count + 1
                });
            })();
        } else {
            this.setState({
                isFinished: true,
            });
        }
    };

    onChoiceClicked(event, choice) {
        const buttonClicked = event.target;
        (async () => {
            let response = await fetch(`http://127.0.0.1:5000/check-answer?key=${this.state.question.key}&guess=${choice}`);
            let correct = await response.json();
            console.log(correct);
            if (correct) {
                this.setState({score: this.state.score + 1});
                buttonClicked.style.backgroundColor = 'green';
            } else {
                buttonClicked.style.backgroundColor = 'red';
            }
            setTimeout(() => {
                this.loadQuestion();
                buttonClicked.style.backgroundColor = 'blanchedalmond';
            }, 350);
        })();
    }

    render() {

        {
            if (!this.state.isFinished) {
                return <section className="quiz">
                    <header className="header">
                        <Link to="/"><i className="header-home-icon fas fa-home"></i></Link>
                        <div className="header-timer">
                            <Timer/>
                        </div>
                    </header>
                    <div className="title">
                        <h1 className="title-quiz"><i className="title-icon fas fa-laptop-code"></i>CODING QUIZ<i
                            className="title-icon fas fa-question-circle"></i></h1>
                    </div>
                    <h3 className="quiz-title">Question <span className="count">{this.state.count}</span>:</h3>
                    <div className="quiz-ask">
                        <h1 className="quiz-ask-text">{this.state.question.name}</h1>
                    </div>
                    <div className="answer">
                        <h3 className="answer-title">Choose the right answer:</h3>
                        {this.state.question.choices.map(choice =>
                            <div className="answer-choices">
                                <i className="icon-choice far fa-hand-point-right"></i>
                                <button style={{background: 'blanchedalmond'}} className="button" key={choice}
                                        type="submit" onClick={event => {
                                    this.onChoiceClicked(event, choice)
                                }}>{choice}</button>
                            </div>
                        )}
                    </div>
                    <div className="score">
                        <h3 className="score-title">Score: <span className="score-number">{this.state.score} / 20</span></h3>
                    </div>

                </section>
            } else {
                return (
                    <EndGame finalScore={this.state.score}/>

                    // <div>
                    //     <Link to="/quiz">Start the quiz</Link>
                    //     <Route path="/quiz" exact component={Quiz}/>
                    // </div>
                    // <nav>
                    //     <Link to="/end-game" />
                    // <EndGame finalScore={this.state.score}/>
                    // <Route path="/end-game" exact component={EndGame}/>
                    // </nav>
                )
            }
        }
    }
}

export default Quiz;