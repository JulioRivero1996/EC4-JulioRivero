const React = require('react');
const {useState, useEffect} = require('react')
const {Link,useParams} = require('react-router-dom');
const client = require('../client');

const EditarPuestoPage = () => {

    const [puesto, setPuesto] = useState({});

    let {id} = useParams();

    useEffect(() =>{
        client({
            method: 'GET',
            path: '/api/puestos/' + id
        }).done(response =>{
            setPuesto(response.entity);
        })
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/puestos/' + id,
            entity: puesto,
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = "/");
    };

    return (
        <>
            <h1>Editar Puesto</h1>
            <div id='Contenedor' style={{ width: '50%', margin: '0 auto'}}>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre</label>
                    <input type='text' id='nombre' name='nombre' value={puesto.nombre} onChange={(e)=>setPuesto({...puesto, nombre: e.target.value })}/>
                    <br/>
                    <label htmlFor="descripcion">Descripción</label>
                    <input type='text' id='descripcion' name='descripcion' value={puesto.descripcion} onChange={(e)=>setPuesto({...puesto, descripcion: e.target.value })} style={{ width: '300px' }}/>
                    <br/>
                    <input type='submit' value="Editar Puesto" className="btn btn-success"></input>         
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

module.exports = EditarPuestoPage;