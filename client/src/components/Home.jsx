import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { filterPokemonByTypes, getPokemons } from "../actions";
import {Link} from "react-router-dom"
import {store} from "../store/index"
import Card from "../components/Card/Card"
import Paginado from "./Paginado/Paginado";

export default function Home(){
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokemons)
    const [currentPage, setCurrentPage] = useState(1) //estados locales, uno con la pagina actual y otro que me setee la pagina actual, lo seteo en 1 porque siempre voy a arrancar en la primer pagina 
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12) //seteo otro estado de pk por pagina, me pide 12 el readme, va a setear cuantas cards quiero por pagina
    const indexOfLastPokemon = currentPage * pokemonsPerPage // esto vale 11 en un ppio
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage //0
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon) //agarra arr y tomo una porcion
    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    // quiero traer del state los pkemon cuando el componente se monta
    useEffect(()=>{
        dispatch(getPokemons()) // es lo mismo que hacer el mapdispatchToProps
    }, [])

    function handleClick(e){
        e.preventDefault();
        dispatch(getPokemons());
    }

    function handleFilterTypes(e){
        dispatch(filterPokemonByTypes(e.target.value))
    }

    return (
        <div>
            <Link to= '/pokemon'>Crear pk</Link>
            <h1>APP DE POKEMONS BY ANGIE</h1>
            <button onClick={e => {handleClick(e)}}>
                Volver a cargar los pokemones
            </button>
            <div>
                <select name="" id="">
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                    
                </select>
                <select onChange={e => handleFilterTypes(e)}>
                    <option value="All">All Types</option>
                    <option value="normal">normal</option>
                    <option value="fighting">fighting</option>
                    <option value="flying">flying</option>
                    <option value="poison">poison</option>
                    <option value="ground">ground</option>
                    <option value="rock">rock</option>
                    <option value="bug">bug</option>
                    <option value="ghost">ghost</option>
                    <option value="steel">steel</option>
                    <option value="fire">fire</option>
                    <option value="water">water</option>
                    <option value="grass">grass</option>
                    <option value="electric">electric</option>
                    <option value="psychic">psychic</option>
                    <option value="ice">ice</option>
                    <option value="dragon">dragon</option>
                    <option value="dark">dark</option>
                    <option value="fairy">fairy</option>
                    <option value="unknown">unknown</option>
                    <option value="shadow">shadow</option>
                </select>
                <select name="" id="">
                    <option value="All">Todos</option>
                    <option value="created">Creados</option>
                    <option value="api">Existentes</option>
                </select>
                <Paginado
                pokemonsPerPage= {pokemonsPerPage}
                allPokemons={allPokemons.length}
                paginado = {paginado}
                />
                {
                    currentPokemons?.map((el) =>{
                        return(
                            <div>
                                <Link to={"/home/" + el.id}>
                                    <Card name={el.name} image={el.pkImg} types={el.type1} />
                                </Link>
                            </div>
                    );
                })
            }
            </div>
        </div>
    )
}