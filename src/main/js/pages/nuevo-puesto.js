const React = require('react');
const { Link } = require('react-router-dom');

const client = require('../client');
const {useState} = require('react');

function PageNuevoPuesto() {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/puestos',
            entity: { nombre: nombre, descripcion: descripcion },
            headers: { 'Content-Type': 'application/json' }
        }).done( () => window.location = "/");
    };

    return (
        <>
            <h1>Nuevo Puesto</h1>
            <div id='Contenedor' style={{ width: '50%', margin: '0 auto'}}>
                <hr />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre: </label>
                    <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} />
                    <br/>
                    <label htmlFor="descripcion">Descripción: </label>
                    <input type="text" id="descripcion" name="descripcion" onChange={(e)=>setDescripcion(e.target.value)} />
                    <br/>
                    <input type="submit" value="Nuevo Puesto" className="btn btn-success"/>
                </form>
                <hr />
                <Link to="/">
                    <button className="btn btn-success">
                        Volver
                    </button>
                </Link>
            </div>
        </>
    );
}

module.exports = PageNuevoPuesto;