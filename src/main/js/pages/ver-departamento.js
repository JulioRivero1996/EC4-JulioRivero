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

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{departamento.nombre}</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <table border="1">
                <thead>
                    <tr>
                        <th colSpan="2">Empleados</th>  
                    </tr>
                    <tr>
                        <th>Persona</th>
                        <th>Puesto</th>
                    </tr>
                </thead>
                <tbody>
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
            <Link to={`/ver-departamento/${id}/nuevo-empleado`}>Nuevo Empleado</Link> | <Link to="/">Volver</Link>
        </>
    );
}

module.exports = VerDepartamentoPage;