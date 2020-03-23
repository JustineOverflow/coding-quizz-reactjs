import React, {Component} from 'react';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: {
                key:'??',
                name: '??',
                score: '??',
                choices: []
            },
            score: 0
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
            <h1>Question: {this.state.question.name} </h1>
            <h3>Choose the right answer:</h3>
            {this.state.question.choices.map(choice =>
                <button key={choice}  type="submit" onClick={event => {this.onChoiceClicked(event, choice)}}>{choice}</button>)}
            <h3>Score: {this.state.score}</h3>
        </section>
    }
}

export default Question;