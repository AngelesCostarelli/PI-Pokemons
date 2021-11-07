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
                     <h2>Height: {myPokemon.height}</h2>
                     <h2>Weight: {myPokemon.weight}</h2>
                     <h2>Life: {myPokemon.pkHp}</h2>
                     <h2>Attack: {myPokemon.pkAttack}</h2>
                     <h2>Defense: {myPokemon.pkDefense}</h2>
                     <h2>Speed: {myPokemon.pkSpeed}</h2>
                     <h2>Type: {myPokemon.type}</h2>
                     </div>
                     
                    <div className={s.btn}>
                     <Link to='/home'>
                     <button>Go Back</button>
                     </Link>
                     </div>
                     </div>
                </div>:
                <div>Loading...</div>
            }
        </div>
        
    )



    // console.log(props.match.params.id)
    // const dispatch = useDispatch()

    // useEffect(()=>{
    //     dispatch(getDetail(props.match.params.id))
    // },[dispatch])
    

    // const myPokemon = useSelector((state)=> state.detail)

    // return(
    //     <div>
    //         {
    //             myPokemon.length > 0 ?
    //             <div>
    //                 <h1>{myPokemon[0].name}</h1>
    //                 <img src={myPokemon[0].pkImg} alt="" />
    //                 <h2>Height: {myPokemon[0].height}</h2>
    //                 <h2>Weight: {myPokemon[0].weight}</h2>
    //                 <h2>Life: {myPokemon[0].pkHp}</h2>
    //                 <h2>Attack: {myPokemon[0].pkAttack}</h2>
    //                 <h2>Defense: {myPokemon[0].pkDefense}</h2>
    //                 <h2>Speed: {myPokemon[0].pkSpeed}</h2>
    //                 <h2>Type: {myPokemon[0].type}</h2>


    //             </div> :
    //             <p>Loading...</p>
    //         }
    //         <Link to= '/home'>
    //             <button>Go Back</button>
    //         </Link>
    //     </div>
    // )
}