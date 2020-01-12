import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = props => {
    return (
        <div>
            <img className="card__img" src={props.image} alt={props.pokemonName}/>
            <h3 className="card__title">{props.pokemonName}</h3>
            <ul className="card__list">{props.typesArray.map((type, index) => <li key={index} className="card__list-item">{type}</li>)}
            </ul>
        </div>
    )
}

Pokemon.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    typesArray: PropTypes.array
}

export default Pokemon;