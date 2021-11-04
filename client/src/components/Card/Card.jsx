import React from "react";
import s from "../Card/Card.module.css"

export default function Card({name, image, type}){

    
    return(
        <div className={s.div}>
        <div className={s.container}>
        <div className={s.card}>
            <img src={image} alt="img not found" width="200px" height="250px"/>
            <h2 className={s.name}>{name}</h2>
            <h5>
                {type} 
            </h5>
        
        </div>
        </div>
        </div>
    )
}