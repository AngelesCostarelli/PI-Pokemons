import React, { Fragment } from "react";
import { useState, useEffect } from "react";

import {useDispatch, useSelector} from "react-redux";
import { filterPokemonByTypes, getPokemons, filterCreated, orderByName, orderByAttack, getTypes, orderByDefense } from "../actions";
import {Link} from "react-router-dom"
import {store} from "../store/index"
import Card from "./Card/Card"
import Paginado from "./Paginado/Paginado";
import Search from "./Search/Search";
import s from "../components/Home/Home.module.css"


export default function Home(){
// --------------traigo types del estado para option--------
    const typesPk = useSelector((state) => state.types)
    useEffect(()=>{
        dispatch(getTypes())
    }, [])

    const dispatch = useDispatch()
    
    const allPokemons = useSelector((state) => state.pokemons)
   
   
    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1) //estados locales, uno con la pagina actual y otro que me setee la pagina actual, lo seteo en 1 porque siempre voy a arrancar en la primer pagina 
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12) //seteo otro estado de pk por pagina, me pide 12 el readme, va a setear cuantas cards quiero por pagina
    const indexOfLastPokemon = currentPage * pokemonsPerPage // esto vale 11 en un ppio
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage //0
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon) //agarra arr y tomo una porcion
    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }



    

    // quiero traer del state los pkemon cuando el componente se monta
    // useEffect(()=>{
    //     dispatch(getPokemons()) // es lo mismo que hacer el mapdispatchToProps
    // }, [])

    function handleClick(e){
        // console.log('entre')
        e.preventDefault();
        dispatch(getPokemons());
        
        
    }

    function handleFilterTypes(e){
        
        dispatch(filterPokemonByTypes(e.target.value))

    }
    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }
    function handleSort(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
      
    }

    function handleSortAttack(e){
        e.preventDefault();
        dispatch(orderByAttack(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)

    }
    
   

    return (
        <div className={s.container}>
            <div className={s.logo}>
            <img src="https://lh3.googleusercontent.com/3TSaKxXGo2wT0lu0AyNUBnkk6wkCC2AzOhJyy3JXIPm-AmZ1k9DSAroWeBUyePswCZSs5lVp3mPF7HzUpY9VPlyOV5eddITONINr3WSqLNLm=e365-w600" alt="" width="200px"/>
            </div>
            
            <div className={s.createPokemon}>
            <Link to= '/pokemon'><button className={s.create}>CREATE POKEMON</button></Link>
            </div>
            <div className={s.search}>
            {<Search/>}
            </div>

            <div className={s.allpokemon}>
           <button className={s.btn} onClick={e => {handleClick(e)}}>
                 All Pokemons
            </button>
            </div>
          
            <div>
                <div className={s.filtros}>
                    <div className={s.order}>
                 <div className={s.select}>
                 <select defaultValue='' onChange={e => handleSort(e)}>
                     <option  value='' disabled >Order</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                    
                </select>
                </div>
                </div>
                
                <div className={s.attack}>
                <div className={s.select}>
                <select defaultValue=''  onChange={e => handleSortAttack(e)}>
                <option value='' disabled >Attack</option>
                    <option value="a">Least</option>
                    <option value="d">Most</option>
                    
                </select>
                </div>
                </div>
                
                <div className={s.types}>
                <div className={s.select}>
                <select defaultValue=''  onChange={ e=> handleFilterTypes(e)}>
                <option value='' disabled >Types</option>
                    <option value="All">All types</option>
                    {
                      
                        typesPk?.map(el => {
                            return(
                                <option key={el.id} value={el.name}>{el.name}</option>
                            )
                        }) 
                    }
                </select>
                </div>
                </div>
                
                <div className={s.filterby}>
                <div className={s.select}>
                <select defaultValue=''  onChange={e => handleFilterCreated(e)}>
                <option value='' disabled>Filter by</option>
                    <option value="All">All Pokemon</option>
                    <option value="created">Created</option>
                    <option value="api">Existing</option>
                </select> 
                </div>
                </div>
                </div>
                
                <div className={s.paginado}>
                <Paginado
                      pokemonsPerPage= {pokemonsPerPage}
                       allPokemons={allPokemons.length}
                       paginado = {paginado}
                                />
                                </div>
                
                {
                  
                    currentPokemons.length > 0 ?
                     currentPokemons.map((el) =>{
                        return(
                            
                            
                         
                          
                            <div className={s.cards} key={el.id}>
                                    <Card  id={el.id} name={el.name} image={el.pkImg ? el.pkImg : el.sprites?.other?.home.front_default} type={el.type}  />
                                
                            </div>
                           
                          
                           
                    );
                    
                  }) :
                  <div> Didn't find any pokemon</div>

                  
                

               
                    
                }
             

                

            </div>
           
        </div>
    )
}