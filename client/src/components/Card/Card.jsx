import React from "react";

export default function Card({name, image, types}){
    return(
        <div>
            <img src={image} alt="img not found" width="200px" height="250px"/>
            <h5>{name}</h5>
            <h3>{types}</h3>
        </div>
    )
}