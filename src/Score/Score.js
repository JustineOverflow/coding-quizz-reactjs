import React, {Component} from 'react';

class Score extends Component {

    constructor(props) {
        super(props)
        this.state = {
            score: '',
        }
    }

    render() {
        return <section className="Score">
            <div>
                {
                    this.state.score((score) =>
                        <p>{score}</p>
                    )
                }
            </div>
        </section>
    }
}

export default Score;