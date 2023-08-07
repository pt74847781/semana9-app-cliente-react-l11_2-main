const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');
const PageNuevoMusico = require('./pages/nuevo-musico');

const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	{path: '/nuevo-musico', element: <PageNuevoMusico />},
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)