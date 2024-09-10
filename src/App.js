import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  }
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name: </label>
        <input type='text' id='firstName' onChange={handleFirstNameChange} required></input>
        <br/>
        <br/>
        <label htmlFor='lastName'>Last Name: </label>
        <input type='text' id='lastName' onChange={handleLastNameChange} required></input>
        <br/>
        <br/>
        <button type='submit'>Submit</button>
      </form>
      {fullName && (<p>Full Name: {fullName}</p>)}
    </div>
  );
}

export default App;
