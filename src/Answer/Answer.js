import React, {Component} from 'react';

class Answer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: '',
        }

    }

    onInputChange(event) {
        this.setState({answer: event.target.value})
    }

    render() {
        return <section className="Answer">
            <div>
                <form>
                <input method="POST" placeholder="insert a number" type="text" id="text"
                       value={this.state.answer} onChange={this.onInputChange}/>

                <button className="button" onClick={this.saveAnswer}>
                    <p>Submit answer</p>
                </button>
                </form>
            </div>
        </section>
    }
}

export default Answer;