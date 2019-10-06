import React from 'react';
import PokeListEntry from './PokeListEntry.jsx'

const PokeList = (props) => (
  <div>
    {props.pokemon.map((poke,i)=>(
      <PokeListEntry poke={poke} key={i}/>
      ))}
  </div>
)

export default PokeList;