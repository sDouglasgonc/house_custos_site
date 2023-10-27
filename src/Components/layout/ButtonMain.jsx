import React from "react";
import './ButtonMain.css'


function ButtonMain({ onStartClick }) {


    return (
        <div className="button">

            <button className="btn_normal" onClick={onStartClick} >Começar</button>

        </div>
    )
}
export default ButtonMain