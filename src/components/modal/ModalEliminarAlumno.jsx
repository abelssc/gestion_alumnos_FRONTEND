function ModalEliminarAlumno(props) {
    function closeModal(e) {
        e.stopPropagation();
        props.closeModal();
    }
    const divStyle = {
        display: props.id ? 'block' : 'none'
    }

    function deleteRegistro(){
        const options = {method: 'DELETE', headers: {'Content-Type': 'application/json'}};

        fetch(`http://localhost/gestion_alumnos/alumnos/${props.id}`, options)
        .then(response => response.json())
        .then(response => {
            props.closeModal();
            alert(response)

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

                <div className="modal-info">
                    <div className="modalDelete">
                        <img src="/src/assets/alert.png" alt="" />
                        <h2>Esta seguro de eliminar el Registro?</h2>
                        <p>¡No podrás revertir esto!</p>
                        <div className="actions">
                            <button className="boton boton-eliminar" onClick={deleteRegistro}>Si, eliminarlo!</button>
                            <button className="boton boton-cancelar" onClick={props.closeModal}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalEliminarAlumno