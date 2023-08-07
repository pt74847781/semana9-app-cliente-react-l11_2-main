const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

const PageNuevoMusico = () => {

    return (
        <>
            <h1>Nuevo Músico</h1>
            <form>
                <label>Nombre</label>
                <input type="text" name="nombre" />
                <input type="submit" value="Nuevo Músico" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevoMusico;