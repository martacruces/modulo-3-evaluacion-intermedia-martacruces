import React from 'react';

const Pokemon = props => {
    return (
        <div>
            <img src={props.image} alt={props.pokemonName}/>
            <h3 className="card__title">{props.pokemonName}</h3>
            <ul className="card__list">{props.typesArray.map((type, index) => <li key={index} className="card__list-item">{type}</li>)}
            </ul>
        </div>
    )
}


export default Pokemon;