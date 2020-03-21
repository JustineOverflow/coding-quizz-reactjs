import React, {Component} from 'react';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: {},
        };

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

    render() {
        return <section className="question">
            <h1> Question: {this.state.question.name} </h1>
        </section>
    }

}

export default Question