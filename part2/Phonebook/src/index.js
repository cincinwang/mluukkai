import ReactDOM from 'react-dom';
import React, {useState} from 'react';


const Names = ({person}) =>{
    return(
        <li key={person.id}>{person.name} {person.number}</li>
    )
};

const App = () => {
    const [persons, setPerson] = useState([
        {name: 'Arto Hellas',
         number: '1010101001'
        }
    ]);

    const [newName, setNewName] = useState('');

    const [newNumber, setNewNumber] = useState('');

    const addName = (event) =>{
        event.preventDefault();
        const nameObject ={
            name: newName,
            id: persons.length +1,
            number: newNumber
        };
        setPerson(persons.concat(nameObject));
        setNewName('')
        setNewNumber('')
        // console.log(nameObject)
        // console.log(persons)
    };




    const handleNameChange = (event) =>{
        const nameList = persons.map(a => a.name)
        if (nameList.includes(event.target.value)) {
            window.alert(event.target.value + 'is already added to phonebook!')
        }
        setNewName(event.target.value)
    };

    const handleNumberChange =(event) =>{
        setNewNumber(event.target.value)
    };

    return(
        <div>
            <h2>Phone Book</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value = {newName} onChange={handleNameChange}/>
                </div>
                <div>
                    number:<input value={newNumber} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type={'submit'}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
                <ul>
                    {persons.map((person,i) => <Names key={i} person={person}/>)}
                </ul>
        </div>
    )
};


ReactDOM.render(<App />, document.getElementById('root'));
