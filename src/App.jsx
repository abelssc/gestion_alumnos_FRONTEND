import Tabla from './components/Tabla';

import './styles/App.css';
import './styles/botones.css';
import './styles/form.css';
import './styles/modal.css';

import { useEffect, useState } from 'react';
import ModalAgregarAlumno from './components/modal/ModalAgregarAlumno';

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {method: 'GET'};
    fetch('http://localhost/gestion_alumnos/alumnos', options)
      .then(response => response.json())
      .then((data) => setData(data))
      .catch(err => console.error(err));
  }, []);

  const [displayModalAlumno,setDisplayModalAlumno]=useState(false);
  const [displayModalCurso,setDisplayModalCurso]=useState(false);

  function handleAgregarAlumno(){
    setDisplayModalAlumno(true);
  }
  function handleAgregarCurso(){
    setDisplayModalCurso(true);
  }

  const closeModal=()=>{
    setDisplayModalAlumno(false);
    setDisplayModalCurso(false);
  }
  return (
    <>
      <div className='container'>
        <header>
          <h1 className='title'>SISTEMA GESTOR DE ALUMNOS</h1>
          <img className='logoPalgo' src="/src/assets/logo-palgo.png" alt="" />
        </header>
        <div className="accionesAlumnos">
          <button className="boton boton-agregar" onClick={() => handleAgregarAlumno()}>
                Agregar Alumno
          </button>
          <button className="boton boton-agregar" onClick={() => handleAgregarCurso()}>
                Agregar Curso
          </button>
        </div>
        <Tabla data={data}/>
      </div>
      {displayModalAlumno&&<ModalAgregarAlumno 
      displayModalAlumno={displayModalAlumno}
      closeModal={closeModal}
      />}
      {displayModalCurso&&<ModalAgregarAlumno 
      displayModalCurso={displayModalCurso}
      closeModal={closeModal}
      />}
    </>
    
  );
}
export default App
