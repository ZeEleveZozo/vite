import React from 'react';

function PokemonCard(props) {

    const {pokemon} = props;
    console.log(props);

  return (
      <figure>
        {pokemon.imgSrc !== undefined ?
          <img src={pokemon.imgSrc}></img> : <p>?????</p>      
      }
        <figcaption>{pokemon.name}</figcaption>
      </figure>
  );
}

export default PokemonCard;
