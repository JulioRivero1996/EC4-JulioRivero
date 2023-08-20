const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { puestos: [], personas: [] , departamentos: []};
	}
	componentDidMount() {
		client({ method: 'GET', path: '/api/puestos' }).done(response => {
			this.setState({ puestos: response.entity._embedded.puestos });
		});
		client({ method: 'GET', path: '/api/personas' }).done(response => {
			this.setState({ personas: response.entity._embedded.personas });
		});
		client({ method: 'GET', path: '/api/departamentos' }).done(response => {
			this.setState({ departamentos: response.entity._embedded.departamentos });
		});
	}
	render() {
		return (
			<>
                <h1>EC4 - Julio Rivero</h1>

				<div style={{"width": "100%", "display": "flex"}}>
					<div style={{"width":"calc(100%/3"}}>
						<Titulo entidad="Puestos" />
						<PuestoList puestos={this.state.puestos} />
						<br />
						<Link to="/nuevo-puesto">Nuevo Puesto</Link>
					</div>
					
					<div style={{"width":"calc(100%/3"}}>
						<Titulo entidad="Personas" />
						<PersonaList personas={this.state.personas} />
						<br />
						<Link to="/nueva-persona">Nueva Persona</Link>
					</div>

					<div style={{"width":"calc(100%/3"}}>
						<Titulo entidad="Departamentos" />
						<DepartamentoList departamentos={this.state.departamentos} />
						<br />
						<Link to="/nuevo-departamento">Nuevo Departamento</Link>
					</div>				
				</div>
				
			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.entidad}</h2>
			<span>Listado de {props.entidad.toLowerCase()}</span>
			<hr />
		</>
	)
}


class PuestoList extends React.Component {
	render() {
		const puestos = this.props.puestos.map(puesto =>
			<Puesto key={puesto._links.self.href} puesto={puesto} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Descripción</th>
						<th>Acciones</th>
					</tr>
					{puestos}
				</tbody>
			</table>
		)
	}
}
class PersonaList extends React.Component {
	render() {
		const personas = this.props.personas.map(persona =>
			<Persona key={persona._links.self.href} persona={persona} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{personas}
				</tbody>
			</table>
		)
	}
}

class DepartamentoList extends React.Component {
	render() {
		const departamentos = this.props.departamentos.map(departamento =>
			<Departamento key={departamento._links.self.href} departamento={departamento} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{departamentos}
				</tbody>
			</table>
		)
	}
}

class Puesto extends React.Component {
	render() {
		const id = this.props.puesto._links.self.href.split('/').slice(-1);
		return (
			<tr>
				<td>{this.props.puesto.nombre}</td>
				<td>{this.props.puesto.descripcion}</td>
				<td>
					<Link to={'/editar-puesto/'+id}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Persona extends React.Component {
	render() {
		const id = this.props.persona._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.persona.nombre}</td>
				<td>
					<Link to={`/editar-persona/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}

class Departamento extends React.Component {
	render() {
		const id = this.props.departamento._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.departamento.nombre}</td>
				<td>
					<Link to={`/ver-departamento/${id}`}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = PageHome;