import {applyMiddleware, compose, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../Reducer/rootReducer';

const middleware = [thunk];

export const CentreStore = legacy_createStore(rootReducer, compose(applyMiddleware(...middleware)));