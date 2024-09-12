
import './App.css';
import axumLogo from './imagenes/logo.png'
import ListaDeTareas from './componentes/ListaDeTareas'

function App() {
  return (
    <div className="aplicacion-tareas">
    <div className='logo-contenedor'>
      <img src={axumLogo} className='logo'></img>
    </div>
    <div className='tareas-lista-principal'>
      <h1>Mis Tareas</h1>
      <ListaDeTareas/>
    </div>
    </div>
   
  );
}

export default App;
