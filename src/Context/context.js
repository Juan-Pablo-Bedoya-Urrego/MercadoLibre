import React, { createContext, useReducer, useContext } from 'react';
import reducer from '../Reducer/reducer';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const initialState = {
        user: '',
        password: '',
        email: '',
        dateBirth: new Date(),
        address: '',
        country: '',
        department: '',
        city: '',
        products: [],
        searchQuery: '',
        rating: 0,
        comment: '',
        ratingSubmitted: false,
        productList: [],
        requestType: '',
        description: '',
        error: '',
        filteredProducts: [],
        name: '',
        lastName: '',
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
