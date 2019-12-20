import React from 'react';
import Pokemon from './Pokemon';

const PokeList = props => {
    return <ul>
        {props.items.map((item)=>{
            return <li>
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