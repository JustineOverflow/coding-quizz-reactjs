import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import EndGame from "../EndGame/EndGame";
import { withRouter } from 'react-router-dom'

class Timer extends Component {

    state = {
        minutes: 3,
        seconds: 0,
    };

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const {seconds, minutes} = this.state;

            if (seconds > 0) {
                this.setState(({seconds}) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    this.props.onTimeout();
                } else {
                    this.setState(({minutes}) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }


    render() {
        const {minutes, seconds} = this.state;
        return (
            <div className="header-timer">
                <h1> Time Remaining
                    <span> {minutes} : {seconds < 10 ? `0${seconds}` : seconds} </span>
                </h1>
            </div>
        )
    }
}

export default withRouter(Timer);