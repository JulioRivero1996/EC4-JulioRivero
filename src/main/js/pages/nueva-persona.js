const React = require('react');
const { Link } = require('react-router-dom');

const client = require('../client');
const {useState} = require('react');

function PageNuevaPersona() {

    const [nombre, setNombre] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/personas',
            entity: { nombre: nombre },
            headers: { 'Content-Type': 'application/json' }
        }).done( () => window.location = "/");
    };

    return (
        <>
            <h1>Nueva Persona</h1>
            <div id='Contenedor' style={{ width: '50%', margin: '0 auto'}}>
                <hr/>
                <form onSubmit={handleSubmit}>                 
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} />
                    <br/>
                    <input type="submit" value="Nueva Persona" className="btn btn-success"/>
                </form>
                <hr/>           
                <Link to="/">
                    <button className="btn btn-success">
                        Volver
                    </button>
                </Link>
            </div>
        </>
    );
}

module.exports = PageNuevaPersona;