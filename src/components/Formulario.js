import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {
    // State Local
    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

    // Funcion para obtener los datos ingresados
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    };

    return (
        <form
            className="col-12"
            onSubmit={e =>{
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca Bebidas por Categoría o Ingredientes</legend>
            </fieldset>
            <div className="row">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        type="text"
                        className="form-control"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        name="categoria" 
                        className="form-control"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {
                            categorias.map(categoria => (
                                <option 
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >
                                    { categoria.strCategory }
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
    );
};

export default Formulario;