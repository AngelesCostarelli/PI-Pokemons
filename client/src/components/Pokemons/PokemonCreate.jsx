import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postPokemons } from '../../actions';


export default function PokemonCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const types = useSelector((state)=> state.types)
    
    const [input, setInput] = useState({
        name:"", 
        height: "",
        weight: "",
        pkHp: "",
        pkAttack: "", 
        pkDefense: "",
        image: "", 
        types:[]
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(input)

    }
    console.log(input)
    function handleSelect(e){
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(input)
        dispatch(postPokemons(input))
        alert("Pokemon Creado!")
        setInput({
            name:"", 
            height: "",
            weight: "",
            pkHp: "",
            pkAttack: "", 
            pkDefense: "",
            image: "", 
            types:[]

        })
        history.push('/home')
    }

    useEffect(()=> {
        dispatch(getTypes())
    }, []);
    

    return(
        <div>
            <Link to= "/home"><button>Volver</button></Link>
            <h1>Crea tu personaje</h1>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div>
                    <label htmlFor="">Nombre:</label>
                    <input 
                    type="text" 
                    value= {input.name} 
                    name="name"
                    onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label htmlFor="">Altura:</label>
                    <input type="number"
                    value={input.height}
                    name = "height" 
                    onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label htmlFor="">Peso:</label>
                    <input type="number"
                    value={input.weight}
                    name = "weight" 
                    onChange={(e)=>handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="">Imagen:</label>
                    <input type="text"
                    value={input.image}
                    name = "weight" 
                    onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label htmlFor="">Vida:</label>
                    <input type="number"
                    value={input.pkHp}
                    name = "pkHp" 
                    onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label htmlFor="">Fuerza:</label>
                    <input type="number"
                    value={input.pkAttack}
                    name = "pkAttack"
                    onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="">Defensa:</label>
                    <input type="number"
                    value={input.pkDefense}
                    name = "pkDefense"
                    onChange={(e)=>handleChange(e)} />
                </div>
                <select onChange={(e) => handleSelect(e)}>
                    {types.map((t)=> (
                        <option value={t.name}>{t.name}</option>
                        
                    ))}
                </select>
               <ul><li>{input.types.map(el => el + " ,")}</li></ul>

                <button type='submit'>Crea Pokemon</button>
                


            </form>
        </div>
    )
}