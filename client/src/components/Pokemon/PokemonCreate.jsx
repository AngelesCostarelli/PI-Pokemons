import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postPokemons } from '../../actions';

export function validate(input){
    let errors = {};
    if(!input.name){
        errors.name = 'Name must be completed'

    }else if(input.height < 0 || input.height> 20){
        errors.height = 'Height must be a number between 0 and 20'
    }else if(input.pkDefense < 0 || input.pkDefense >100){
        errors.pkDefense = 'Defense must be a number between 0 and 100'
    }else if(input.pkAttack < 0 || input.pkAttack > 120){
        errors.pkAttack = 'Attack must be a number between 0 and 120'
    }else if(input.pkHp < 0 || input.pkHp > 100){
        errors.pkHp = 'Attack must be a number between 0 and 100'
    }else if(input.pkSpeed < 0 || input.pkSpeed > 150){
        errors.pkSpeed = 'Attack must be a number between 0 and 150'
    }else if( input.type.length <=0){
        errors.type = 'You must select at least 1 type and no more than 2'
    }else if(input.type.length > 2 ){
        errors.type = "Limit of types exceeded. Please reset and select 1 or 2 types"
    }
    return errors
}




export default function PokemonCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const types = useSelector((state)=> state.types)
    const [errors, setErrors] = useState({})
//errors.name, errors.height, errors.pkDefense, errors.pkAttack, errors.pkHp, errors.pkSpeed, errors.type
    const activado = !errors.name && !errors.height && !errors.pkDefense && !errors.pkAttack && !errors.pkHp && !errors.pkSpeed && !errors.type
//    console.log(activado)
    const [input, setInput] = useState({
        name:"", 
        height: "",
        weight: "",
        pkHp: "",
        pkAttack: "", 
        pkDefense: "",
        pkSpeed: "",
        pkImg: "", 
        type:[]
    })
  

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        
        

    }
    
    function handleSelect(e){
        
        setInput({
            ...input,
            type: [...input.type, e.target.value]
        })
        setErrors(validate({
            ...input,
            type: [...input.type, e.target.value]
        }))
        
        
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
            pkImg: "" , 
            type:[]

        })
        history.push('/home') // me redirige al home cuando termino de crear el personaje 
    }

    function handleDelete(el){
        console.log('entra')
    
        setInput({
            ...input,
            type: input.type.filter( t => t === el)
        })
            
    }

    useEffect(()=> {
        dispatch(getTypes())
    }, []);
    

    return(
        <div>
            <Link to= "/home"><button>Volver</button></Link>
            <h1>Let's make your own pokemon</h1>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div>
                    <label >Name:</label>
                    <input 
                    type="text" 
                    value= {input.name} 
                    required
                    name="name"
                    onChange={(e)=>handleChange(e)}/>
                    {
                        errors.name &&(
                            <p>{errors.name}</p>
                        )
                    }
                </div>
                <div>
                    <label >Height:</label>
                    <input type="number"
                    value={input.height}
                    required
                    name = "height" 
                    onChange={(e)=>handleChange(e)}/>
                    {
                        errors.height &&(
                            <p>{errors.height}</p>
                        )
                    }
                </div>
                <div>
                    <label >Weight:</label>
                    <input type="number"
                    value={input.weight}
                    required
                    name = "weight" 
                    onChange={(e)=>handleChange(e)}
                    />
                </div>
            
                <div>
                    <label >Hp:</label>
                    <input type="number"
                    value={input.pkHp}
                    required
                    name = "pkHp" 
                    onChange={(e)=>handleChange(e)}/>
                    {
                        errors.pkHp &&(
                            <p>{errors.pkHp}</p>
                        )
                    }
                </div>
                <div>
                    <label >Attack:</label>
                    <input type="number"
                    value={input.pkAttack}
                    required
                    name = "pkAttack"
                    onChange={(e)=>handleChange(e)} />
                    {
                        errors.pkAttack &&(
                            <p>{errors.pkAttack}</p>
                        )
                    }
                </div>
                <div>
                    <label >Defense:</label>
                    <input type="number"
                    value={input.pkDefense}
                    required
                    name = "pkDefense"
                    onChange={(e)=>handleChange(e)} />
                    {
                        errors.pkDefense &&(
                            <p>{errors.pkDefense}</p>
                        )
                    }
                </div>
                <div>
                    <label >Speed:</label>
                    <input type="number"
                    value={input.pkSpeed}
                    required
                    name = "pkSpeed"
                    onChange={(e)=>handleChange(e)} />
                    {
                        errors.pkSpeed &&(
                            <p>{errors.pkSpeed}</p>
                        )
                    }
                </div>
                <div>
                    <label >Image:</label>
                    <input type="text"
                    value={input.pkImg}
                    name = "pkImg" 
                    onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    Type:
                <select onChange={(e) => handleSelect(e)}>
                    {types.map((t)=> (
                       
                        <option value={t.name} 
                        >{t.name}
                        
                    
                        </option>
                        


                        
                        
                    ))}
                </select>
                
                {
                        errors.type &&(
                            <p>{errors.type}</p>
                        )
                    }
                    </div>
                     <button disabled={!activado} type='submit'>Create Pokemon!</button>
          
                


            </form>
            {input.type.map(el => 
            
                <div>
                    <p>{el}</p>
                    
                </div>
                
                
                )}
               <button onClick={(e)=>handleDelete(e)}>Reset Types</button>

        </div>
    )
}