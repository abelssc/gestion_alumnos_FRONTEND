import React, { useState } from 'react';

import ModalEditarAlumno from './modal/ModalEditarAlumno';
import ModalEliminarAlumno from './modal/ModalEliminarAlumno';
import ModalVerNotas from './modal/ModalVerNotas';
import './tabla.css';


function Tabla(props) {
  const { data } = props;
  console.log(data);
  
 

  const [displayModalEliminarAlumno,setDisplayModalEliminarAlumno]=useState(false);

  const [dataVerNotas,setDataVerNotas]=useState([]);
  const [displayModalVerNotas,setDisplayModalVerNotas]=useState(false);
  function handleVerNotas($id){
    const options = {method: 'GET',mode:'cors'};
    fetch(`http://localhost/gestion_alumnos/all/${$id}`, options)
    .then(response => response.json())
    .then((data) => {
      setDataVerNotas(data);
      setDisplayModalVerNotas($id);
    })
      .catch(err => console.error(err));

  }


  const [dataforUpdate, setDataforUpdate] = useState({});
  const [displayModalEditarAlumno,setDisplayModalEditarAlumno]=useState(false);
  function handleEditarAlumno($id){
    const options = {method: 'GET'};
    fetch(`http://localhost/gestion_alumnos/alumnos/${$id}`, options)
    .then(response => response.json())
    .then((data) => {
      setDataforUpdate(data);
      setDisplayModalEditarAlumno($id);
  
    })
      .catch(err => console.error(err));
  }
  function handleEliminarAlumno($id){
    setDisplayModalEliminarAlumno($id);
  }
  const closeModal=()=>{
    setDisplayModalVerNotas(false);
    setDisplayModalEditarAlumno(false);
    setDisplayModalEliminarAlumno(false);
  }

  return (
    <>
    <table className="tabla">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Sexo</th>
          <th>Fecha de Nacimiento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.nombres}</td>
            <td>{row.apellidos}</td>
            <td>{row.sexo}</td>
            <td>{row.fecha_nacimiento}</td>
            <td>
              <button className="boton boton-verCursos" onClick={() =>handleVerNotas(row.id)}>
                ver notas
              </button>
              <button className="boton boton-cancelar" onClick={() => handleEditarAlumno(row.id)}>
                Editar
              </button>
              <button className="boton boton-eliminar" onClick={() => handleEliminarAlumno(row.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {displayModalVerNotas&&<ModalVerNotas 
    data={dataVerNotas}
    id={displayModalVerNotas}
    closeModal={closeModal}
    />}
    {displayModalEditarAlumno&&<ModalEditarAlumno 
    id={displayModalEditarAlumno}
    dataforUpdate={dataforUpdate}
    closeModal={closeModal}
    />}
    {displayModalEliminarAlumno&&<ModalEliminarAlumno 
    id={displayModalEliminarAlumno}
    closeModal={closeModal}
    />}
    </>
  );
}

export default Tabla;
