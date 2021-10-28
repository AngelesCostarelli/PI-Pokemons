import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getPokemons } from "../actions";
import {Link} from "react-router-dom"
import {store} from "../store/index"
import Card from "../components/Card/Card"

export default function Home(){
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokemons)
    console.log(allPokemons)
    // quiero traer del state los pkemon cuando el componente se monta
    useEffect(()=>{
        dispatch(getPokemons()) // es lo mismo que hacer el mapdispatchToProps
    }, [])

    function handleClick(e){
        e.preventDefault();
        dispatch(getPokemons());
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
                <select name="" id="">
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
                {
                    allPokemons?.map((el) =>{
                        return(
                            <fragment className='cartas'>
                                <Link to={"/home/" + el.id}>
                                    <Card name={el.name} image={el.pkImg} types={el.type1} />
                                </Link>
                            </fragment>
                    );
                })
            }
            </div>
        </div>
    )
}