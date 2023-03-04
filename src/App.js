import React, { useState, useEffect } from 'react';
import data from './mocks/handlers.js';
import axios from 'axios';
import Characters from './components/Character.js';
import theme from './Theme/theme.js';
import styled from 'styled-components';





const App = () => {
  const [characterdata, setData ] = useState([]);
  
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setData(res.data);
    })
    .catch(err => console.error(err))
  } ,[])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  

  
  `
  const StyleH = styled.h1`
aling-items: center;
// background-color: white;
width:50%


  `


  return (
    <StyledApp className="App">
      <StyleH className="Header">Characters</StyleH>
       {characterdata.map((characterdata, index) => (
        <Characters key={index} chat={characterdata} />
      ))}
    </StyledApp>
  );
}

export default App;
