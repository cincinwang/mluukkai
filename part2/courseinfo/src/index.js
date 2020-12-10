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

const CourseSum = ({course}) => {

    const total = course.parts.reduce((s,p) => {
        return s + p.exercise },0)
    return(
        <h3>total of {total} exercises</h3>
    )
};

const Course = ({course}) => {

    return (
        <div>
            <CourseName course={course}/>
            <CoursePart course={course}/>
            <CourseSum course={course}/>
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
