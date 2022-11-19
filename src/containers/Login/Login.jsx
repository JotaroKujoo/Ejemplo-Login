import React, {useState, useEffect} from "react"; // useState para los hooks y useEffect para los estados 
import "./Login.css";
import Navigator from "../../components/Navigator/Navigator";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/apicalls";

const Login = () => {

    let navigate = useNavigate()
    //Creamos el estado de login
    const [user, setUser] = useState({
        email: "",
        password: "",

    })
    //Handler para manejar la entrada de texto
    const inputHandler = (e) => {
        console.log(e.target.value)

        //Aquí setearemos de forma DINÁMICA el BINDEO entre inputs y hook
        setUser((prevState)=> ({
            ...prevState, [e.target.name]: e.target.value
        }));

    }

    //Función para iniciar sesión
    const logMe =  () =>{
        loginUser(user)
            .then(resp => {
                //Aquí procedo a guardar el token en redux
                console.log(resp);
                if(resp){
                    //Si hay respuesta correcta del backend
                    setTimeout(()=>{
                        navigate("/")    

                    },1000)
                }
            })
            .catch()

    }


    //FASE DE RENDERIZADO
    return (
        <div className="loginDesign">
            <pre> {JSON.stringify(user,null,2)} </pre>
             
            <Navigator pathUno={"/"} destinoUno={"Home"} pathDos={"/register"} destinoDos={"Register"}/>

            <div className="inputsContainer">
                <input type="email" name="email" placeholder="email" onChange={(e)=>inputHandler(e)}/>
                <input type="password" name="password" placeholder="password" onChange={(e)=>inputHandler(e)}/>
            </div>
            <div onClick={()=>logMe()} className="buttonDesign">
                Log in
            </div>

            
        </div>

    )
};

export default Login;