import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercise1 = 10
    const part2 = 'Using props to pass data'
    const exercise2 = 7
    const part3 = 'State of a component'
    const exercise3 = 14

    const Header = (props) => {
        return (
            <div><p>{props.course}</p></div>
        )
    };

    const Part = (props) => {
        return (
            <p>{props.part}{props.score}</p>
        )
    }
    const Content = (props) => {
        return(
            <div>
                <Part part={part1} score={exercise1} />
                <Part part={part2} score={exercise2} />
                <Part part={part3} score={exercise3} />
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
            <Content/>
            <Total number = {exercise1 + exercise2 + exercise3} />
        </div>
    )
};


ReactDOM.render(<App />, document.getElementById('root'));
