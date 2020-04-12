import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import EndGame from "../EndGame/EndGame";
import Timer from "./Timer";
import {withRouter} from 'react-router-dom'
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
            return (this.props.history.push({
                pathname: '/end-game',
                state: {
                    finalScore: this.state.score,
                    total: this.state.total
                }
            }))

            // this.setState({
            //     isFinished: true,
            // });
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
            return <section className="quiz">
                <div className="header">
                    <Link to="/"><i className="header-backhome fas fa-home"></i></Link>
                    <Timer className="header-timer" onTimeout={() => this.props.history.push({
                        pathname: '/end-game',
                        state: {finalScore: this.state.score, total: this.state.total}
                    })}/>
                </div>
                <h1 className="quiz-ask">Question {this.state.count} : {this.state.question.name}</h1>
                <div className="answer">
                    {this.state.question.choices.map(choice =>
                        <button style={{background: 'white'}} className="answer-button" key={choice}
                                type="submit" onClick={event => {
                            this.onChoiceClicked(event, choice)
                        }}>{choice}</button>
                    )}
                </div>
                <div className="score">
                    <h3 className="score-title">Score: <span
                        className="score-number">{this.state.score} / {this.state.total}</span></h3>
                </div>

            </section>
        }
    }
}

export default withRouter(Quiz);