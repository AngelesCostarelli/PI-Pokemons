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
        pkSpeed: "",
        image: "", 
        type:[]
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        
        console.log(input)

    }
    
    function handleSelect(e){
        setInput({
            ...input,
            type: [...input.type, e.target.value]
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
            pkSpeed: "",
            image: "", 
            type:[]

        })
        history.push('/home') // me redirige al home cuando termino de crear el personaje 
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
                    <label >Nombre:</label>
                    <input 
                    type="text" 
                    value= {input.name} 
                    name="name"
                    onChange={(e)=>handleChange(e)}/>
                    
                </div>
                <div>
                    <label >Altura:</label>
                    <input type="number"
                    value={input.height}
                    name = "height" 
                    onChange={(e)=>handleChange(e)}/>
                    
                </div>
                <div>
                    <label >Peso:</label>
                    <input type="number"
                    value={input.weight}
                    name = "weight" 
                    onChange={(e)=>handleChange(e)}
                    />
                </div>
            
                <div>
                    <label >Vida:</label>
                    <input type="number"
                    value={input.pkHp}
                    name = "pkHp" 
                    onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label >Fuerza:</label>
                    <input type="number"
                    value={input.pkAttack}
                    name = "pkAttack"
                    onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                    <label >Defensa:</label>
                    <input type="number"
                    value={input.pkDefense}
                    name = "pkDefense"
                    onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                    <label >Velocidad:</label>
                    <input type="number"
                    value={input.pkSpeed}
                    name = "pkSpeed"
                    onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                    <label >Imagen:</label>
                    <input type="text"
                    value={input.image}
                    name = "image" 
                    onChange={(e)=>handleChange(e)}/>
                </div>
                <select onChange={(e) => handleSelect(e)}>
                    {types.map((t)=> (
                        <option value={t.name}>{t.name}</option>
                        
                    ))}
                </select>
               <ul><li>{input.type.map(el => el + " ")}</li></ul>

                <button type='submit'>Crea Pokemon</button>
                


            </form>
        </div>
    )
}