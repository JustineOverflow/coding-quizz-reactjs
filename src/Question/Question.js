import React, {Component} from 'react';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: [],
        };

    }

    render() {
        return <section className="question">
        <div>
            {
                this.state.question((question) =>
                <p> {question.text} </p>
                )
            }
        </div>
        </section>
    }

}

export default Question;