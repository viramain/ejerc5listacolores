import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ejercicio5 from './components/Ejercicio5';



function App() {
  // el return esta 
  return (
    // Fragment es para englobar todo el codigoHTML. LOs componentes tienen la primera letra mayuscula
    <Fragment>
      {/* EJERCICIO 5 ok CARDS DE COLORES */}
      <Ejercicio5></Ejercicio5>
    </Fragment>
  );
}

export default App;
