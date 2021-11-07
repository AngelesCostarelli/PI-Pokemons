import React, { useDebugValue } from "react";
import { Link } from "react-router-dom";
import s from "../LandingPage/LandingPage.module.css"
function LandingPage(){
    return (
        <div className={s.bkg}>
        <div className={s.div}>
            <div className={s.welcome}>
            <h3>Welcome to the Pokemon Api</h3>
            </div>
            <Link to = '/home'>
                <button className={s.btn}>Go</button>
            </Link>
        
        </div>
        </div>
    )
};

export default LandingPage