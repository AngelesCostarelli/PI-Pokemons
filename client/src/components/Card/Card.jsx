import React from "react";
import { Link } from "react-router-dom";
import s from "../Card/Card.module.css"

export default function Card({id, name, image, type}){

    
    return(
        <div className={s.div}>
        <div className={s.container}>
        <div className={s.card}>
            <Link to={`/id/${id}`}>
            <img src={image} alt="img not found" width="200px" height="250px"/>
            <h2 className={s.name}>{name}</h2>
            </Link>
            <h5>
               Type: 
            </h5>
            <div>
                {type.map((e)=> 
                <div>{e}</div>
                
                )}
            </div>
           
        
        </div>
        </div>
        </div>
    )
}