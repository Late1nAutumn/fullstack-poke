import React from 'react';

const PokeListEntry = (props) => (
  <div>
    <div>
      <img src={props.poke.image_url}/>
      <h3>{props.poke.name}</h3>
      <p>{props.poke.type}</p>
    </div>
  </div>
)

export default PokeListEntry;