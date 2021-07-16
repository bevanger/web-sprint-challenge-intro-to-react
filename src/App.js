import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] =useState([])
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

useEffect(() => {
  axios.get("https://swapi.dev/api/people")
    .then(response =>{
      setCharacterData(response.data);
      console.log(response);
      return () => console.log('Cleanup');
    })
    .catch(err => console.log(err));
}, []);

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
    {
      characterData.map((char) => {
        return <Character info={char}/>
      })
    }  
    </div>
    
  );
}

export default App;
