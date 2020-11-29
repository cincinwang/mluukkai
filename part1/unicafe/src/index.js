import React, {useState} from 'react';
import ReactDOM from 'react-dom';


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
            <p>statistics</p>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>All {all}</p>
            <p>Average {average}</p>
            <p>Positive {positive}</p>
        </div>
    )

};

ReactDOM.render(<App />, document.getElementById('root'));
