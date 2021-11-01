import React, { useDebugValue } from "react";
import { Link } from "react-router-dom";
import s from "../LandingPage/LandingPage.module.css"
function LandingPage(){
    return (
        <div className={s.bkg}>
        <div className={s.div}>
            <h1 className={s.welcome}>Welcome</h1>
            <Link to = '/home'>
                <button className={s.btn}>Ingresar</button>
            </Link>
        
        </div>
        </div>
    )
};

export default LandingPage