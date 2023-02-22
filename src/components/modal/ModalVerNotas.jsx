import { useState } from "react";
import ModalEditarNotas from "./ModalEditarNotas";

function ModalVerNotas(props) {
    const { data } = props;

    const [displayModalEditarNota, setDisplayModalEditarNota] = useState([]);
    const [ids,setIds]=useState({});

    // function handleEditarNota(alumnoId,cursoId) {
    //     const options = { method: 'GET' };
    //     fetch(`http://localhost/gestion_alumnos/alumno/${alumnoId}/curso/${cursoId}`, options)
    //         .then(response => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             // setDisplayModalEditarNota(data);
    //             // setIds({"alumno":alumnoId,"curso":cursoId})
    //         })
    //         .catch(err => console.error(err));
    // }

    function closeModal(e) {
        e.stopPropagation();
        props.closeModal();
    }
    const divStyle = {
        display: props.id ? 'block' : 'none'
    }
    return (
        <div
            className="modal"
            onClick={closeModal}
            style={divStyle}>

            <div className="modal-content modal-table"
                onClick={e => e.stopPropagation()}>
                <span
                    className="close"
                    onClick={closeModal}>&times;
                </span>
                <h2>Ver Notas</h2>
                <div className="modal-info">
                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>Curso</th>
                                <th>Descripcion</th>
                                <th>Practica 1</th>
                                <th>Practica 2</th>
                                <th>Practica 3</th>
                                <th>Parcial</th>
                                <th>Final</th>
                                <th>Promedio Final</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={`${row.cursos.id}-${row.notas.id}`}>
                                    <td>{row.cursos.nombre}</td>
                                    <td>{row.cursos.descripcion}</td>
                                    <td>{row.notas.practica1}</td>
                                    <td>{row.notas.practica2}</td>
                                    <td>{row.notas.practica3}</td>
                                    <td>{row.notas.parcial}</td>
                                    <td>{row.notas.final}</td>
                                    <td>{row.notas.promedio_final}</td>
                                    <td>
                                        <button className="boton boton-cancelar" onClick={() => handleEditarNota(row.alumnos.id,row.cursos.id)}>
                                            Editar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* {displayModalEditarNota && <ModalEditarNotas
                id={ids}
                dataforUpdate={displayModalEditarNota}
                closeModal={closeModal}
            />} */}
                </div>
            </div>

        </div>
    );
}
export default ModalVerNotas;