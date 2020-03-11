// import libs
import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Define action creators
export const { Types, Creators } = createActions({
  signIn: ['loginInfo'],
  signInSuccess: null,
  signInFailed: null
});

// Initial state
export const INITIAL_STATE = Immutable({
  isProcessing: false,
  type: '',
  token: ''
});

const signIn = (state, action) => {
  return state.merge({
    isProcessing: true,
    type: action.type
  });
};

const signInSuccess = (state, action) => {
  return state.merge({
    isProcessing: false,
    type: action.type,
    token: action.token
  });
};

const signInFailed = (state, action) => {
  return state.merge({
    isProcessing: false,
    type: action.type
  });
};

// Assign handler to types.
const HANDLERS = {
  [Types.SIGN_IN]: signIn,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILED]: signInFailed
};

// Create reducers by pass state and handlers
export const accountReducer = createReducer(INITIAL_STATE, HANDLERS);
