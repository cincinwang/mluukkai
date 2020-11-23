import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercise: 10
        },
        {
        name: 'Using props to pass data',
        exercise: 7
        },
        {
        name: 'State of a component',
        exercise: 14
        }
     ];
    const [part1, part2, part3] = parts;
    console.log(part1.name);
    console.log(part2.exercise);
    console.log(part1);
    const Header = (props) => {
        return (
            <div><p>{props.course}</p></div>
        )
    };

    const Part = (props) => {
        return (
            <p>{props.part}{props.score}</p>
        )
    };
    const Content = (props) => {
        return(
            <div>
                <Part part={part1.name} score={part1.exercise} />
                <Part part={part2.name} score={part2.exercise} />
                <Part part={part3.name} score={part3.exercise} />
            </div>
        )
    };

    const Total = (props) => {
        return(
            <div><p>Number of exercise {props.number}</p></div>
        )
    };

    return(
        <div>
            <Header course = {course} />
            <Content/>
            <Total number = {part1.exercise + part2.exercise + part3.exercise} />
        </div>
    )
};


ReactDOM.render(<App />, document.getElementById('root'));