import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
    if (props.good ===0 & props.neutral ===0 & props.bad ===0){
        return(
            <div>Statistic
                <p>No feedback has been given</p>
            </div>
        )
    }
    return(
        <div>Statistics
          <p>all {props.all}</p>
          <p>average {props.average}</p>
          <p>positive {props.positive}</p>
        </div>

    )
};

const App = () =>{
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);

   const all = good +neutral + bad;
   const average =  (good + bad*(-1))/all;
   const positive = good/all;
    return (
        <div>
            <p>give feedback</p>
            <button onClick={() => setGood(good +1)}>good</button>
            <button onClick={() => setNeutral(neutral +1)}>neutral</button>
            <button onClick={() => setBad(bad+1)}>bad</button>
            <p>{good}</p>
            <p>{neutral}</p>
            <p>{bad}</p>
            <Statistics good = {good} neutral={neutral} bad = {bad} all={all} average={average} positive={positive} />

        </div>
    )

};

ReactDOM.render(<App />, document.getElementById('root'));
