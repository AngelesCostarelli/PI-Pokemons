import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getTypes, postPokemons } from '../../actions';
import s from '../Pokemon/PokemonCreate.module.css'

export function validate(input){
    let errors = {};
    if(!input.name){
        errors.name = 'Name must be completed'

    }else if(input.height < 0 || input.height> 20){
        errors.height = 'Height must be a number between 0 and 20'
    }else if(input.weight < 0 || input.weight > 500){
        errors.weight = 'Weight must be a number between 0 and 500'

    }else if(input.pkDefense < 0 || input.pkDefense >100){
        errors.pkDefense = 'Defense must be a number between 0 and 100'
    }else if(input.pkAttack < 0 || input.pkAttack > 120){
        errors.pkAttack = 'Attack must be a number between 0 and 120'
    }else if(input.pkHp < 0 || input.pkHp > 100){
        errors.pkHp = 'Attack must be a number between 0 and 100'
    }else if(input.pkSpeed < 0 || input.pkSpeed > 150){
        errors.pkSpeed = 'Attack must be a number between 0 and 150'
    }else if( input.type.length <= 0){
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
        dispatch(getPokemons())
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
        <div className={s.general}>

            <Link to= "/home"><button className={s.back}>Go Back</button></Link>
            <div className={s.wrapper}>
            <div className={s.title}><h1>Make your own pokemon</h1></div>
            
            <form className={s.form} onSubmit={(e)=> handleSubmit(e)}>
                <div className={s.input_field}>
                    <label className={s.name}>Name:</label>
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
                <div className={s.input_field}>
                    <label className={s.name}>Height:</label>
                    <input 
                    type="number"
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
                <div className={s.input_field}>
                    <label className={s.name}>Weight:</label>
                    <input 
                    type="number"
                    value={input.weight}
                    required
                    name = "weight" 
                    onChange={(e)=>handleChange(e)}
                    />
                     {
                        errors.weight &&(
                            <p>{errors.weight}</p>
                        )
                    }
                </div>
            
                <div className={s.input_field}>
                    <label className={s.name}>Hp:</label>
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
                <div className={s.input_field}>
                    <label className={s.name} >Attack:</label>
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
                <div className={s.input_field}>
                    <label className={s.name} >Defense:</label>
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
                <div className={s.input_field}>
                    <label className={s.name} >Speed:</label>
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
                <div className={s.input_field}>
                    <label className={s.name} >Image:</label>
                    <input type="text"
                    value={input.pkImg}
                    name = "pkImg" 
                    onChange={(e)=>handleChange(e)}/>
                </div>
                <div className={s.input_field}>
                    <label className={s.name}>Type:</label>
                    <div className={s.select}>
                <select defaultValue="" onChange={(e) => handleSelect(e)}>
                    <option disabled="disable" >--Choose 1 or 2</option>
                    {types.map((t)=> (
                       
                        <option key={t.id} value={t.name} 
                        >{t.name}
                        
                    
                        </option>
                        


                        
                        
                    ))}
                </select>
                </div>
                {
                        errors.type &&(
                            <p>{errors.type}</p>
                        )
                    }
                    </div>
          
                
                    <button className={s.create} disabled={!activado} type='submit'>Create Pokemon!</button>


            </form>
            {input.type.map(el => 
            
                <div>
                    <p>{el}</p>
                    
                </div>
                
                
                )}
               <button disabled={activado} onClick={(e)=>handleDelete(e)}>Reset Types</button>

        </div>
        </div>
    )
}