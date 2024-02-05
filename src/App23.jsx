import React from 'react';
import { useState } from 'react';
import { ReactDOM } from 'react';
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('')
  const[newNumber,setNewNumber]=useState('')
  const[searchTerm,setSearchTerm]=useState('')
  const handleNameChange=(event)=>{
    setNewName(event.target.value);
  }
  const handleNumberChange=(event)=>{
    setNewNumber(event.target.value)
  }
  const filteredPersons=persons.filter(person=>person.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const addPerson=(event)=>{
    event.preventDefault();
    let nameExists=false;
    for (const person of persons )
    {
      if(person.name==newName)
      {
        nameExists=true;
        break;
      }
    }
    if(nameExists)
    {
      alert(`${newName} is already added to phonebook`)
    }
    else
    {
      const newPerson={name:newName , number:newNumber};

      setPersons([...persons,newPerson]);
      setNewName('');
      setNewNumber('');

    }
    const handleSearchChange=(event)=>{
      setSearc
    }
   

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Search by name:<input value={searchTerm} onChange={setSearchTerm}/>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}  />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person,index)=>(
          <div key={index}>
            {person.name} {person.number}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App