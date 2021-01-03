import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react';
import nameBook from "./services/notes";


// const Names = ({person}, handleDelete) =>{
//
//     return(
//         <li key={person.id}>{person.name} {person.number} <button onClick={handleDelete(person.id)}>delete</button></li>
//     )
// };

const Persons = ({person,handleDelete}) =>{
    return(
        <ul>
            {person.map((person) => <li key={person.id}>{person.name} {person.number} <button onClick={()=>handleDelete(person.name,person.id)}>delete</button></li>)}
        </ul>
    )
};

// const Filter = ({person}) =>{
//
//     const personList = person.map(a => a.name);
//     const showList = personList.filter(b => b.toUpperCase() === showPerson.toUpperCase());
//     const personIndex = personList.indexOf(showList.toString())
//
//     return(
//         <div>
//             {showList.map(c => <li>{c} {person[personIndex].number}</li>)}
//         </div>
//     )
// }


const App = () => {
    // const [persons, setPerson] = useState([
    //     {name: 'Arto Hellas',
    //      number: '1010101001'
    //     },
    //     {name: 'Lily', number:'03948930'},
    //     {name:'Rose', number:'989830943'}
    // ]);

    const [persons, setPerson] = useState([])

    const [newName, setNewName] = useState('');

    const [newNumber, setNewNumber] = useState('');

    const [showPerson, setShowPerson] = useState('');


    const personList = persons.map(a => a.name);
    const showList = personList.filter(b => b.toUpperCase() === showPerson.toUpperCase());
    const personIndex = personList.indexOf(showList.toString())

    // console.log(personList);
    // console.log(showUpperCasePerson);

    useEffect(()=>{
        nameBook
        .getAll('http://localhost:3001/persons').then(response => {
            console.log(response.data);
            setPerson(response.data)
        });
        }
    , []);

    const addName = (event) =>{
        event.preventDefault();
        const nameObject ={
            name: newName,
            // id: persons.length +1,
            number: newNumber
        };

        nameBook
            .create(nameObject)
            .then(response => {
                setPerson(persons.concat(response.data));
                setNewName('')
                setNewNumber('')
                }

            );
        // setPerson(persons.concat(nameObject));
        // setNewName('')
        // setNewNumber('')
        // console.log(nameObject)
        console.log(persons.map(a => a.name.toUpperCase()))


    };

    const handleShowPerson = (event) =>{
        setShowPerson(event.target.value)
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

    const handleDelete = (name,id) =>{
        const person = persons.find(person => person.id ===id)
        if(window.confirm(`delete ${name}`)){
            nameBook
                .deleteName(person.id)
                .then(response =>{
                    setPerson(persons.filter(person => person.id !== id))
                })

        }

    };

    return(
        <div>
            <h2>Phone Book</h2>

            <div>filter shown with <input value={showPerson} onChange={handleShowPerson}/></div>
            {/*<Filter person={persons}/>*/}
            <div>
                {showList.map(c => <li>{c} {persons[personIndex].number}</li>)}
            </div>

            <h3>Add a new</h3>
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
            <Persons person={persons} handleDelete={handleDelete}/>
        </div>
    )
};


ReactDOM.render(<App />, document.getElementById('root'));
