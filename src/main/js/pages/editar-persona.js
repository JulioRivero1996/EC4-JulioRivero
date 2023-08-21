const React = require('react');
const { Link, useParams } = require('react-router-dom');

const client = require('../client');
const { useState, useEffect } = require('react');

function PageEditarPersona() {

    const [persona, setPersona] = useState({});

    // getting id param from route
    let { id } = useParams();

    useEffect(() => {
        client({ method: 'GET', path: '/api/personas/' + id }).done(response => {
            setPersona(response.entity);
        });
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/personas/' + id,
            entity: persona,
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = "/");
    };

    return (
        <>
            <h1>Editar Persona</h1>
            <div id='Contenedor' style={{ width: '50%', margin: '0 auto'}}>
                <hr />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" value={persona.nombre} onChange={(e) => setPersona({...persona, nombre: e.target.value })} />
                    <br/>
                    <input type="submit" value="Editar Persona" className="btn btn-success" />
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

module.exports = PageEditarPersona;