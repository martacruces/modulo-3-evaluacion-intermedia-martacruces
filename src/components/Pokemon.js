import React from 'react';

const Pokemon = props => {
    return (
        <div>
            <img src={props.image} alt={props.pokemonName}/>
            <h5>{props.pokemonName}</h5>
            <ul>{props.typesArray.map((type) => {
                return <li>
                    {type}
                </li>
            })}
            </ul>
        </div>
    )
}


export default Pokemon;