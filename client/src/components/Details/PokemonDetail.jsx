import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../actions';


export default function Detail(props){
    console.log(props.match.params.id)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch])
    

    const myPokemon = useSelector((state)=> state.detail)

    return(
        <div>
            {
                myPokemon.length > 0 ?
                <div>
                    <h1>{myPokemon[0].name}</h1>
                    <img src={myPokemon[0].pkImg} alt="" />
                    <h2>Height: {myPokemon[0].height}</h2>
                    <h2>Weight: {myPokemon[0].weight}</h2>
                    <h2>Life: {myPokemon[0].pkHp}</h2>
                    <h2>Attack: {myPokemon[0].pkAttack}</h2>
                    <h2>Defense: {myPokemon[0].pkDefense}</h2>
                    <h2>Speed: {myPokemon[0].pkSpeed}</h2>
                    <h2>Type: {myPokemon[0].type}</h2>


                </div> :
                <p>Loading...</p>
            }
            <Link to= '/home'>
                <button>Go Back</button>
            </Link>
        </div>
    )
}