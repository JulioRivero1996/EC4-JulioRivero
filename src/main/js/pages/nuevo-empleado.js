const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');


const NuevoEmpleadoPage = () => {

    let { id } = useParams();
    const [personas, setPersonas] = useState([])
    const [puestos, setPuestos] = useState([])
    const [idPersona, setIdPersona] = useState('')
    const [idPuesto, setIdPuesto] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/empleados',
            entity: {
                departamento: 'http://localhost:8080/api/departamentos/'+id,
                persona: 'http://localhost:8080/api/personas/'+idPersona,
                puesto: 'http://localhost:8080/api/puestos/'+idPuesto},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/personas'
        }).done(response=>{
            let personas2 = [];
            response.entity._embedded.personas.map(persona => {
                personas2.push({value: persona._links.self.href.split('/').slice(-1), label: persona.nombre})
            })
            setPersonas(personas2)
        })
        client({
            method: 'GET',
            path: '/api/puestos'
        }).done(response=>{
            let puestos2 = [];
            response.entity._embedded.puestos.map(puesto => {
                puestos2.push({value: puesto._links.self.href.split('/').slice(-1), label: puesto.nombre})
            })
            setPuestos(puestos2)
        })

    },[])

    return (
        <>
            <h1>Nuevo Empleado</h1>

            <div id='Contenedor' style={{ width: '50%', margin: '0 auto'}}>
                <hr/>
                <form onSubmit={handleSubmit}>

                    <label htmlFor='persona'>Persona</label>
                    <select name="persona" id="persona" onChange={(e)=>{setIdPersona(e.target.value)}}>
                        {personas.map(persona => {	
                            return (
                                <option key={persona.value} value={persona.value}>{persona.label}</option>
                            )
                        })}
                    </select>
                    <br/>
                    <label>Puesto</label>
                    <select name="puesto" id="puesto" onChange={(e)=>{setIdPuesto(e.target.value)}}>
                        {puestos.map(puesto => {	
                            return (
                                <option key={puesto.value} value={puesto.value}>{puesto.label}</option>
                            )
                        })}
                    </select>
                    <br/>      
                    <input type="submit" value="Nuevo Empleado" className="btn btn-success"/>
                </form>
                <hr/>
                <Link to="/">
                    <button className="btn btn-success">
                        Volver
                    </button>
                </Link>
            </div>
        </>
    )
}

module.exports = NuevoEmpleadoPage;