const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter, RouterProvider } = require('react-router-dom');

const PageHome = require('./pages/home');
const PageNuevaPersona = require('./pages/nueva-persona');
const PageNuevoPuesto = require('./pages/nuevo-puesto');
const PageNuevoDepartamento = require('./pages/nuevo-departamento');
const PageNuevoEmpleado = require('./pages/nuevo-empleado');
const PageVerDepartamento = require('./pages/ver-departamento');
const PageEditarPersona = require('./pages/editar-persona');
const PageEditarPuesto = require('./pages/editar-puesto');


const router = createBrowserRouter([

	{ path: '/', element: <PageHome /> },
	{ path: '/nueva-persona', element: <PageNuevaPersona /> },
	{ path: '/nuevo-puesto', element: <PageNuevoPuesto /> },
	{ path: '/nuevo-departamento', element: <PageNuevoDepartamento /> },
	{ path: '/ver-departamento/:id', element: <PageVerDepartamento /> },
	{ path: '/ver-departamento/:id/nuevo-empleado', element: <PageNuevoEmpleado /> },
	{ path: '/editar-persona/:id', element: <PageEditarPersona /> },
	{ path: '/editar-puesto/:id', element: <PageEditarPuesto /> }
	
]);


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)