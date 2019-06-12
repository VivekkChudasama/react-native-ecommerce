import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  setProductsRequest: null,
  setProductsSuccess: ['products'],
  setError: ['errorMessage'],
});

export const ProductTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  products: [],
  errorMessage: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PRODUCTS_SUCCESS]: (state, { products }) => ({
    ...state,
    products,
    errorMessage: null,
  }),
  [Types.SET_ERROR]: (state, { errorMessage }) => ({ ...state, errorMessage }),
});