// Write your Character component here
import React from "react";
import styled from 'styled-components';
// import data from './mocks/handlers.js';
    // films: [
    //   "A New Hope",
    //   "The Empire Strikes Back",
    //   "Return of the Jedi",
    //   "Revenge of the Sith",
    // ],
    // species: [],
    // vehicles: [
    //   "http://swapi.dev/api/vehicles/14/",
    //   "http://swapi.dev/api/vehicles/30/",
    // ],
    // starships: [
    //   "http://swapi.dev/api/starships/12/",
    //   "http://swapi.dev/api/starships/22/",
    // ],
    // created: "2014-12-09T13:50:51.644000Z",
    // edited: "2014-12-20T21:17:56.891000Z",
    // url: "http://swapi.dev/api/people/1/",



const Characters = (props) => {

const StyledDiv = styled.div`
border: solid 2px;
width: 50%;
background-color: clay;
aling-items: center;


`    
const StyledCharacters =styled.section`
  display: flex;
  flex-direction: raw;
  justify-content: space-between;
  border: solid 2px;
  font-size: 20px;

  
  `



     return ( 
     <StyledDiv className="character-name">
        <StyledCharacters>
        <p>{props.chat.name}</p>
        <p>Birth Year: {props.chat.birth_year}</p>
        </StyledCharacters>

        <section>
        <p>Height: {props.chat.height}</p>
        <p>Mass: {props.chat.mass}</p>
        <p>Hair Color: {props.chat.hair_color}</p>
        <p>Skin Color: {props.chat.skin_color}</p>
        <p>Eye Color: {props.chat.eye_color}</p>
        <p>Gender: {props.chat.gender}</p>
        {/* <img src={props.chat.homeworld}/> */}
        </section>
        
     </StyledDiv>
    )
}

export default Characters;