import React from "react";
import "./Register.css"
import Navigator from "../../components/Navigator/Navigator";


const Register = () => {
    return (
        <div className="registerDesign">
            Soy Register

            <Navigator pathUno={"/login"} destinoUno={"Login"} pathDos={"/"} destinoDos={"Home"}/>
        </div>

    )
};


export default Register;