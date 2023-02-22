function ModalAgregarAlumno(props) {

    function insertarRegistro(e){
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));
        
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: jsonData
          };
          
          fetch('http://localhost/gestion_alumnos/alumnos', options)
            .then(response => response.json())
            .then(response => {
                props.closeModal();
                alert(response);
            })
            .catch(err => console.error(err));
    }

    function closeModal(e) {
        e.stopPropagation();
        props.closeModal();
    }
    const divStyle = {
        display: props.displayModalAlumno ? 'block' : 'none'
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
                <h2>Agregar Alumno</h2>
                <div className="modal-info">
                    <form action="" className="form" onSubmit={insertarRegistro}>
                        <label htmlFor="nombres">nombres</label>
                        <input type="text" name="nombres" id="nombres" required />

                        <label htmlFor="apellidos">apellidos</label>
                        <input type="text" name="apellidos" id="apellidos" required />

                        <label htmlFor="sexo">sexo</label>
                        <select name="sexo" id="sexo" required>

                            <option value="M">M</option>
                            <option value="F">F</option>
                        </select>
                        <label htmlFor="fecha_nacimiento">fecha de nacimiento</label>
                        <input type="date" name="fecha_nacimiento" id="fecha_nacimiento" required />
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
export default ModalAgregarAlumno;