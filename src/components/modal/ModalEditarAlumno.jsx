
function ModalEditarAlumno(props){
    // const data=props.dataforUpdate[0];
    const data=props.dataforUpdate[0];
   
    function closeModal(e) {
        e.stopPropagation();
        props.closeModal();
    }
    const divStyle = {
        display: props.id ? 'block' : 'none'
    }
    function editarRegistro(e){
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

        const options = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: jsonData
          };
          
          fetch(`http://localhost/gestion_alumnos/alumnos/${props.id}`, options)
            .then(response => response.json())
            .then(response => {
                props.closeModal();
                alert(response);
            })
            .catch(err => console.error(err));

    }

    return (
        <div
            className="modal"
            onClick={closeModal}
            style={divStyle}>

            <div className="modal-content"
                onClick={e => e.stopPropagation()}>
                <span
                    className="close"
                    onClick={closeModal}>&times;
                </span>
                <h2>Editar Alumno</h2>
                <div className="modal-info">
                    <form action="" className="form" onSubmit={editarRegistro}>
                        <label htmlFor="nombres">nombres</label>
                        <input type="text" name="nombres" id="nombres" required defaultValue={data.nombres}/>

                        <label htmlFor="apellidos">apellidos</label>
                        <input type="text" name="apellidos" id="apellidos" required defaultValue={data.apellidos}/>

                        <label htmlFor="sexo">sexo</label>
                        <select name="sexo" id="sexo" required defaultValue={data.sexo}>
                            <option value="M">M</option>
                            <option value="F">F</option>
                        </select>
                        <label htmlFor="fecha_nacimiento">fecha de nacimiento</label>
                        <input type="date" name="fecha_nacimiento" id="fecha_nacimiento" required defaultValue={data.fecha_nacimiento}/>
                        <div className="actions">
                            <button className="boton boton-agregar">Si, agregar!</button>
                            <input type="button" className="boton boton-cancelar" onClick={props.closeModal}value="Cancelar"/>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}
export default ModalEditarAlumno;