import React from "react";

import { useNavigate } from "react-router-dom";


const Navigator = ({destinoUno,destinoDos,pathUno,pathDos}) => {

    const surfer = useNavigate();
    return (
        <div className="navigatorDesign">
            <div onClick={()=>surfer(pathUno)} >{destinoUno}</div>
            <div onClick={()=>surfer(pathDos)} >{destinoDos}</div>
        </div>
    )
}

export default Navigator;