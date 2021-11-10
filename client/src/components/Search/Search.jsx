import React from "react";
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getNamePokemons} from "../../actions";
import { useHistory } from 'react-router-dom';
import s from '../Search/Search.module.css'
export default function SearchBar(){
    const pokemon = useSelector(state => state.pokemons)
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    const { push } = useHistory()

    function handleInputChange(e){
        e.preventDefault()
        setSearch(e.target.value)
        // console.log(e.target.value)
        
    }
    function handleSubmit(e){
        e.preventDefault()
        
       let name = pokemon.map(e => e.name)
        
        let found = name.includes(search.toLowerCase())
        if(found){
            dispatch(getNamePokemons(search))

        }else{
            push(`/home`)
            setSearch('')
            return alert('Pokemon does not exist')

        }




        // for(var i = 0; i < name.length; i++){
        //     // console.log(name[i])
        //     if(name[i] === search){
               
        //         dispatch(getNamePokemons(search))

        //     }else{
        //         // push( `/home/error`)
              
        //         push(`/home`)
        //         setSearch('')
        //         return alert('Pokemon does not exist')
                

        //     }
        // }
     
        
    }

    return(
        <div className={s.box}>
     
          
            <form onSubmit={handleSubmit}>
                
                
                <input placeholder='Name...'
                type="text" onChange={handleInputChange} value={search} />
                
 
                <input type="submit" value="search" />
                
            </form>

            
        </div>
    )
}
