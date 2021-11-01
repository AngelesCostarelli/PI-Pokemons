import React from "react";
import s from "../Card/Card.module.css"

export default function Card({name, image, type}){
    
    return(
        <div>
            <img src={image} alt="img not found" width="200px" height="250px"/>
            <h3 className={s.name}>{name}</h3>
            <h5>{type}</h5>
           
           
            

        </div>
        
    )
}