import React from "react";
import s from '../Paginado/Paginado.module.css'

export default function Paginado({pokemonsPerPage, allPokemons, paginado}){
    const pageNumbers = []
    

   for(let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
        //math.ceil me va a redondear todos mis personajes sobre la cantidad de personajes que quiero por pagina 
    pageNumbers.push(i) 
    }
   
   
    return(
        
            <section className={s.paginacion}>
                <ul>
                {
                    pageNumbers?.map(number => (
                        
                        <li className='number' key={number}>
                        <a  onClick={() => paginado(number)}>{number}</a>
                        </li>
                        
                        
                    ))
                }
                </ul>
            </section>
        

    )
}