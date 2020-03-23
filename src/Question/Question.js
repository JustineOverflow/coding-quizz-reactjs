import React, {Component} from 'react';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: {
                key: '??',
                name: '??',
                score: '??',
                choices: []
            },
            score: 0,
            count: 0
        };
        this.onChoiceClicked = this.onChoiceClicked.bind(this)
    }

    componentDidMount() {
        this.loadQuestion()
    }


    loadQuestion() {
        (async () => {
            let response = await fetch('http://127.0.0.1:5000/quiz');
            let question = await response.json();
            this.setState({question})
            this.setState({count: this.state.count +1})
        })();
    };

    onChoiceClicked(event, choice) {
        (async () => {
            let response = await fetch(`http://127.0.0.1:5000/check-answer?key=${this.state.question.key}&guess=${choice}`);
            let correct = await response.json();
            console.log(correct);
            if (correct)
                this.setState({score: this.state.score + 1})

        })();
    }


    render() {
        return <section className="question">
            <div className="title">

                <h1 className="title-quiz"><i className="title-icon fas fa-laptop-code"></i>CODING QUIZ<i
                    className="title-icon fas fa-question-circle"></i></h1>
            </div>
            <h3 className="question-title">Question <span className="count">{this.state.count}</span>:</h3>
            <div className="question-ask">
                <h1 className="question-ask-text">{this.state.question.name}</h1>
            </div>
            <div className="answer">
                <h3 className="answer-title">Choose the right answer:</h3>
                {this.state.question.choices.map(choice =>
                    <div className="answer-choices">
                        <i className="icon-choice far fa-hand-point-right"></i>
                        <button className="button" key={choice} type="submit" onClick={event => {
                            this.onChoiceClicked(event, choice)
                        }}>{choice}</button>
                    </div>
                )}
            </div>
            <div className="score">
                <h3 className="score-title">Score: {this.state.score}</h3>
            </div>
        </section>
    }
}

export default Question;