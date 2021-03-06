import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


const Weather = ({capital}) =>{
    const [weather, setWeather] = useState({});
    const api_key = process.env.REACT_APP_API_KEY;

        useEffect(()=>{
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
            .then(response => {
                console.log(response.data);
                setWeather(response.data.current)
            })


        }, []);


    console.log('2')
    console.log(weather)

    return(
        <div>
            <h4>Weather in {capital}</h4>
            <div><strong>temperature:</strong> {weather.temperature} Celcius</div>
            <div><img src={weather.weather_icons} width="20%"/></div>
            <div><strong>wind:</strong> {weather.speed} mph direction SSW </div>
        </div>


    )
};


const ResultList = ({countryList, showCountry, countries, handleShow}) =>{
    // const bigCountryList = countryList.map(a => a.toUpperCase());
    // const bigShowCountry = showCountry.toUpperCase();

    const result = countryList.filter(countryList => countryList.toLowerCase().match(showCountry.toLowerCase()))


    if(showCountry.trim()=== ''){
        return null
    }
    else if(result.length === 1){
        const oneResult = countryList.indexOf(result.toString());
        console.log(countries[oneResult])
        console.log(countries[oneResult].flag)
        return(
            <div>
                <h3>{countries[oneResult].name}</h3>
                <div>capital {countries[oneResult].capital}</div>
                <div>population {countries[oneResult].population}</div>
                <h4>Languages</h4>
                <ul>
                    {countries[oneResult].languages.map(a => <li>{a.name}</li>)}
                </ul>
                <div><img src={countries[oneResult].flag} width="20%" alt={countries[oneResult].name}/></div>
                <Weather capital={countries[oneResult].capital}/>

            </div>

        )
    }
    else if(result.length>10){
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
    return(
        <div>
            {result.map(result =><div>{result} <button onClick={()=>handleShow(result)}>show</button></div>)}
        </div>
    )
};

const App = () => {
    const [showCountry, setShowCountry] = useState('');
    const [countries, setCountry] = useState([]);
    const countryList = countries.map(a => a.name);

    const handleShowCountry = (event) =>{
        setShowCountry(event.target.value)
    };

    const handleShow = (e) =>{
        // e.preventDefault();
        setShowCountry(e)
    };


    useEffect(()=>{
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
            // console.log(response.data);
                setCountry(response.data)
        })
    }, []);
    // console.log(countries)



  return (
      <div>
        <div>find countries <input value={showCountry} onChange={handleShowCountry} /></div>
        <ResultList countryList={countryList} showCountry={showCountry} countries={countries} handleShow={handleShow}/>
      </div>
  )

};

ReactDOM.render(<App />, document.getElementById('root'));


