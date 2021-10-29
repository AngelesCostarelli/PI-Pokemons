import React from "react";

export default function Paginado({pokemonsPerPage, allPokemons, paginado}){
    const pageNumbers = []
    console.log(pageNumbers)

    for (let i = 0; i <= Math.ceil(allPokemons/pokemonsPerPage); i++) {
        //math.ceil me va a redondear todos mis personajes sobre la cantidad de personajes que quiero por pagina 
    pageNumbers.push(i+1) 
    }
    return(
        <nav>
            <ul className='paginado'>
                {
                    pageNumbers?.map(number => (
                        <li className='number' key={number}>
                        <a onClick={() => paginado(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>

    )
}