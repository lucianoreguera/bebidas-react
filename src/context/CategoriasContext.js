import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el Context
export const CategoriasContext = createContext();

// Provider es donde se encuentra las funciones y el state
const CategoriasProvider = (props) => {
    // Crear el state del context
    const [categorias, guardarCategorias] = useState([]);

    // Ejecutar el llamado a la API
    useEffect(() => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

        const obtenerCategorias = async () => {
            const categorias = await axios.get(url);

            guardarCategorias(categorias.data.drinks);
        };
        obtenerCategorias();
    }, []);

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
};

export default CategoriasProvider;