import React from "react";
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getNamePokemons } from "../../actions";

export default function SearchBar(){
    
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setSearch(e.target.value)
        
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNamePokemons(search))
        
    }

    return(
        <div>
            {/* <input 
            type="text"
            placeholder = "Buscar..."
            onChange={(e)=> handleInputChange(e)}
            />
            <button type="submit" onClick={(e)=>handleSubmit(e)}>Buscar</button> */}
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleInputChange} value={search} />
                <input type="submit" value="buscar" />
            </form>
            
        </div>
    )
}
