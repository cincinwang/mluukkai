import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
    return(
        <div>
          <p>{props.text} {props.value}</p>
        </div>
    )
};

const Button = ({ onClick, text }) => {
    return(
        <button onClick={onClick}>
          {text}
        </button>
    )
};

const App = () =>{
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);
   const [allClicks, setAll] = useState([]);

   const all = good + neutral + bad;
   const average =  (good + bad*(-1))/all;
   const positive = good/all;

   const handleGoodClick = () => {
       setAll(allClicks.concat('G'));
       setGood(good + 1)
   };

   const handleNeutralClick = () => {
       setAll(allClicks.concat('N'));
       setNeutral(neutral + 1)
   };

    const handleBadClick = () => {
        setAll(allClicks.concat('B'));
        setBad(bad + 1)
    };

    if (allClicks.length === 0){
        return(
            <div>
                <p>give feedback</p>
                <Button onClick={handleGoodClick} text="Good" />
                <Button onClick={handleNeutralClick} text="Neutral" />
                <Button onClick={handleBadClick} text="Bad" />
                <p>{good}</p>
                <p>{neutral}</p>
                <p>{bad}</p>
                <p>No feedback has been given</p>
            </div>
        )
    }

    return (
        <div>
            <p>give feedback</p>
            <Button onClick={handleGoodClick} text="Good" />
            <Button onClick={handleNeutralClick} text="Neutral" />
            <Button onClick={handleBadClick} text="Bad" />
            <p>{good}</p>
            <p>{neutral}</p>
            <p>{bad}</p>
            <p>Statistics</p>
            <Statistics text="good" value={good} />
            <Statistics text="neutral" value={neutral} />
            <Statistics text="bad" value={bad} />
            <Statistics text="all" value={all} />
            <Statistics text="average" value={average} />
            <Statistics text="positive" value={positive} />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
