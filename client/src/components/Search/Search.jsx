import React from "react";
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getNamePokemons } from "../../actions";
import s from '../Search/Search.module.css'
export default function SearchBar(){
    
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setSearch(e.target.value)
        console.log(e.target.value)
        
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNamePokemons(search))
        
    }

    return(
        <div className={s.box}>
            {/* <input type="text" placeholder="Search.."
            onChange={handleInputChange} />
            <button className={s.btn} type='submit' onClick={handleSubmit}>Search</button> */}
          
            <form onSubmit={handleSubmit}>
                
                
                <input placeholder='Name...'
                type="text" onChange={handleInputChange} value={search} />
                
 
                <input type="submit" value="search" />
                
            </form>

            
        </div>
    )
}
