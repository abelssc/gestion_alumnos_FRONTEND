
function ModalEditarNotas(props){
    console.log(props);
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
          
          fetch(`http://localhost/gestion_alumnos/alumno/${props.id.alumno}/curso/${props.id.curso}`, options)
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

                        <label htmlFor="practica1">practica1</label>
                        <input type="number" name="practica1" id="practica1" required defaultValue={data.practica1} step="0.01"/>

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
export default ModalEditarNotas;