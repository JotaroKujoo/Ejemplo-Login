import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './containers/Home/Home'
import Login from './containers/Login/Login'
import Register from './containers/Register/Register'



function App() {
  return (
    <div className="App">
      
      {/* Generamos el entorno de React Router Dom para el enrutado de vistas y componentes */}

      <BrowserRouter>

        {/* La parte cambiante del programa es todo el contenido dentro de Routes */}
        <Routes>

          {/* Cada Route contendra una vista................................................................ */}
          <Route path='/' element={<Home/>}>
          </Route>

          <Route path='/login' element={<Login/>}>
          </Route>

          <Route path='/register' element={<Register/>}>
          </Route>

        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
