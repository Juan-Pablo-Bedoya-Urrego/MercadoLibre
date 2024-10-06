import React, { createContext, useReducer, useContext } from 'react';
import reducer from '../Reducer/reducer';
import productOne from "../img/tecladoMouse.jpg";
import productTwo from "../img/kz.webp";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const initialState = {
        user: '',
        password: '',
        email: '',
        dateBirth: new Date(),
        address: '',
        country: 'Colombia',
        department: 'Antioquia',
        city: 'Medellín',
        products: [
            { id: '1', image: require('../img/tecladoMouse.jpg'), description: 'Combo teclado mouse económico', valueProduct: '1000000', amount: '1' },
            { id: '2', image: require('../img/kz.webp'), description: 'Audífonos especiales para gaming', valueProduct: '5200000', amount: '1' },
        ],
        searchQuery: '',
        rating: 0,
        comment: '',
        ratingSubmitted: false,
        productList: [],
        requestType: '',
        description: '',
        error: '',
        filteredProducts: [],
        name: 'Pedro Pablo',
        lastName: 'Montoya Varado',
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext };