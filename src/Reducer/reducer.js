import { initialState } from '../Context/context';

const reducer = (state, action) => {

    switch (action.type) {

        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_DATE_BIRTH':
            return { ...state, dateBirth: action.payload };
        case 'SET_ADDRESS':
            return { ...state, address: action.payload };
        case 'SET_COUNTRY':
            return { ...state, country: action.payload };
        case 'SET_DEPARTMENT':
            return { ...state, department: action.payload };
        case 'SET_CITY':
            return { ...state, city: action.payload };

        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };

        case 'SET_PRODUCTSH':
            return { ...state, products: action.payload };
        case 'SET_SEARCH_QUERY':
            return { ...state, searchQuery: action.payload };

        case 'SET_RATING':
            return { ...state, rating: action.payload };
        case 'SET_COMMENT':
            return { ...state, comment: action.payload };
        case 'SUBMIT_RATING':
            return { ...state, ratingSubmitted: true, comment: '' };
        case 'RESET_SUBMISSION':
            return { ...state, ratingSubmitted: false };

        case 'SET_PRODUCTS':
            return { ...state, productList: action.payload };

        case 'SET_REQUEST_TYPE':
            return { ...state, requestType: action.payload };
        case 'SET_DESCRIPTION':
            return { ...state, description: action.payload, error: '' };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case 'RESET_FORM':
            return { ...state, description: '', requestType: '', error: '' };

        case 'SET_SEARCH_QUERY':
            return { ...state, searchQuery: action.payload };
        case 'SET_FILTERED_PRODUCTS':
            return { ...state, filteredProducts: action.payload };

        case 'REMOVE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
            };
        case 'UPDATE_AMOUNT':
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id
                        ? { ...product, amount: action.payload.value }
                        : product
                ),
            };

        case 'UPDATE_AMOUNTB':
            return state.map(prod =>
                prod.id === action.payload.id ? { ...prod, amount: action.payload.value } : prod
            );

        case 'UPDATE_NAME':
            return { ...state, profile: { ...state.profile, name: action.payload } };
        case 'UPDATE_LASTNAME':
            return { ...state, profile: { ...state.profile, lastName: action.payload } };

        default:
            return state;
    }



};

export default reducer;