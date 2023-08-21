const React = require('react');
const {useState, useEffect} = require('react');
const {useParams} = require('react-router-dom');
const client = require('../client');
const {Link} = require('react-router-dom');

const VerDepartamentoPage = ()=>{

    let {id} = useParams();
    const [departamento, setDepartamento] = useState({});
    const [empleados, setEmpleados] = useState([]);

    useEffect(()=>{

        const url_departamento = '/api/departamentos/'+id

        client({
            method: 'GET',
            path: url_departamento
        }).done((response)=>{setDepartamento(response.entity);})

        client({
            method: 'GET',
            path: url_departamento + '/formacion'
        }).done((response)=>{setEmpleados(response.entity);})

    }, []);

    return (
        <>
            <h1>Ver Departamento</h1>
            <div id='Contenedor' style={{ width: '50%', margin: '0 auto'}}>

                <hr />

                <table border="1">
                    <tbody style={{ backgroundColor: 'white' }}>
                        <tr>
                            <th style={{ color: 'white', backgroundColor: 'black' }}>Nombre</th>
                            <td>{departamento.nombre}</td>
                        </tr>
                    </tbody>
                </table>

                <hr />

                <table border="1">
                    <thead style={{ color: 'white', backgroundColor: 'black' }}>
                        <tr>
                            <th colSpan="2" >Empleados</th>  
                        </tr>
                        <tr>
                            <th>Persona</th>
                            <th>Puesto</th>
                        </tr>
                    </thead>
                    <tbody style={{ backgroundColor: 'white' }}>
                        {empleados.map(empleado => {
                            return (
                                <tr key={empleado.ID}>
                                    <td>{empleado.PERSONA}</td>
                                    <td>{empleado.PUESTO}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <hr />

                <Link to={`/ver-departamento/${id}/nuevo-empleado`}><button className="btn btn-success">Nuevo Empleado</button></Link> | <Link to="/"><button className="btn btn-success">Volver</button></Link>
            </div>
            
        </>
    );
}

module.exports = VerDepartamentoPage;