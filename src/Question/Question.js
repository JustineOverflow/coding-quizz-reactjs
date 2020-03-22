import React, {Component} from 'react';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: {
                name: '??',
                answer: '??',
                choices: []
            },
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
            console.log(question);
            this.setState({question})
        })();
    };

    onChoiceClicked(event, choice) {
        console.log(choice)
    }

    render() {
        return <section className="question">
            <h1> Question: {this.state.question.name} </h1>
            <h3>Choose the right answer:</h3>
            {this.state.question.choices.map(choice =>
                <button type="submit" onClick={event => {this.onChoiceClicked(event, choice)}}>{choice}</button>)}
        </section>
    }
}

export default Question;