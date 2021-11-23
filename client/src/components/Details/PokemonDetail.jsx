import React, {useState, useEffect} from 'react';
// import {Link, useHistory} from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getDetail } from '../../actions';
import { useParams } from 'react-router';
import axios from 'axios'
import { RUTE_DATA } from '../../Urls/urls';
import { Link } from 'react-router-dom';
import s from '../Details/PokemonDetail.module.css'


export default function PokemonDetail(){
    const [myPokemon, setMyPokemon] = useState(null)
    let {id} = useParams()
    console.log('entra')
    
    useEffect(()=>{
        axios(RUTE_DATA + id)
        .then((res)=>{
            setMyPokemon(res.data)
        })
        return ()=>{
            setMyPokemon(null)
        }

    }, [])


    return(
        <div className={s.body}>
        
            {
                myPokemon ?
                <div className={s.contenedor}>
                
                <div className={s.img}>
                <img src={myPokemon.pkImg} alt="" />
                </div>
                <div className={s.pokemonInfo}>
                    <div className={s.pokemonTexto}>
                     <h1>{myPokemon.name}</h1>
                     <h5>Id: {myPokemon.id}</h5>
                     <h5>Height: {myPokemon.height}</h5>
                     <h5>Weight: {myPokemon.weight}</h5>
                     <h5>Life: {myPokemon.pkHp}</h5>
                     <h5>Attack: {myPokemon.pkAttack}</h5>
                     <h5>Defense: {myPokemon.pkDefense}</h5>
                     <h5>Speed: {myPokemon.pkSpeed}</h5>
                     {/* <h5>Type: {myPokemon.type[0] + ' ' + myPokemon.type[1]} </h5> */}
                     <h5>Type: {myPokemon.type.length < 2 ? myPokemon.type[0] : myPokemon.type[0] + ' ' + myPokemon.type[1]}</h5>
                     
                     
                     </div>
                     
                    <div className={s.btn}>
                     <Link to='/home'>
                     <button>Back</button>
                     </Link>
                     </div>
                     </div>
                </div>:
                <div className={s.loading}>Loading...</div>
            }
        </div>
        
    )



}