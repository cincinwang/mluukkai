import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
    return(
        <div>Statistics
          <p>{props.all}</p>
          <p>{props.average}</p>
          <p>{props.positive}</p>
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
            <Statistics all={all} average={average} positive={positive} />

        </div>
    )

};

ReactDOM.render(<App />, document.getElementById('root'));
