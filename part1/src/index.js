import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    // const course = 'Half Stack application development'
    // const part1 = 'Fundamentals of React'
    const exercise1 = 10
    // const part2 = 'Using props to pass data'
    const exercise2 = 7
    // const part3 = 'State of a component'
    const exercise3 = 14

    const Header = (props) => {
        return (
            <div><p>{props.course}</p></div>
        )
    };

    const Content = (props) => {
        return(
            <div>
                <p>{props.part1} {props.exercise1}</p>
                <p>{props.part2} {props.exercise2}</p>
                <p>{props.part3} {props.exercise3}</p>
            </div>
        )
    };

    const Total = (props) => {
        return(
            <div><p>Number of exercise {props.number}</p></div>
        )
    }

    return(
        <div>
            <Header course = 'Half Stack application development' />
            <Content part1 = 'Fundamentals of React' exercise1 = {10} part2 = 'Using props to pass data' exercise2 = {7}
            part3 = 'State of a component' exercise3 = {14} />
            <Total number = {exercise1 + exercise2 + exercise3} />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
