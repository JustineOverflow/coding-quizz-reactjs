import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import EndGame from "../EndGame/EndGame";

class Timer extends Component {

    state = {
        minutes: 1,
        seconds: 0,
        timesup: false
    };

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state;

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval);
                    this.setState({
                        timesUp: true
                    })
                } else {
                    this.setState(({ minutes }) => ({
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
            <div>
                {minutes === 0 && seconds === 0 ?
                    <Route exact={true} path="/end-game" component={EndGame}/>
                    : <h1 className="timerContainer"> Time Remaining: <span className="time">{minutes} : {seconds < 10 ? `0${seconds}` : seconds} </span> </h1>
                    // <h1 isTimesUps={this.state.timesUp}> Times up!</h1>
                }
            </div>
        )
    }
}

export default Timer;