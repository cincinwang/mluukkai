import ReactDOM from 'react-dom';
import React, {useState} from 'react';


const Names = ({person}) =>{
    return(
        <li key={person.id}>{person.name}</li>
    )
};

const App = () => {
    const [persons, setPerson] = useState([
        {name: 'Arto Hellas'}
    ]);

    const [newName, setNewName] = useState('')

    const addName = (event) =>{
        event.preventDefault();
        const nameObject ={
            name: newName,
            id: persons.length +1
        };

        setPerson(persons.concat(nameObject));
        setNewName('')
        console.log(nameObject)
        console.log(persons)
    }

    const handleNameChange = (event) =>{
        setNewName(event.target.value)
    }

    return(
        <div>
            <h2>Phone Book</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value = {newName} onChange={handleNameChange}/>
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
