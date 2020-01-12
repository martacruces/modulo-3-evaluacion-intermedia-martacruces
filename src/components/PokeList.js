import React from 'react';
import Pokemon from './Pokemon';

const PokeList = props => {
    return <ul className="pokemon__container">
        {props.items.map((item)=>{
            return <li key={item.id} className="card">
                <Pokemon
                image={item.url}
                pokemonName={item.name}
                typesArray={item.types}
                />
            </li>
        })}
    </ul>
}

export default PokeList;