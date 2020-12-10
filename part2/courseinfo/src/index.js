import React from 'react';
import ReactDOM from 'react-dom';


const CourseName = ({course}) =>{

    return (
        <h2>{course.name}</h2>
    )
};
const CoursePart = ({course}) =>{
    return(
        <ul>
            {course.parts.map(part => <li key = {part.id}>{part.name}{part.exercise}</li>)}
        </ul>
    )
};
const Course = ({course}) => {
    console.log(course)
    console.log(course.parts)
    console.log('2')
    return (
        <div>
            <CourseName course={course}/>
            <CoursePart course={course}/>
        </div>
    )
};

const App = () => {

    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercise: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercise: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercise: 14,
                id:3
            }
        ]
    };

    return <Course course = {course} />

};


ReactDOM.render(<App />, document.getElementById('root'));
