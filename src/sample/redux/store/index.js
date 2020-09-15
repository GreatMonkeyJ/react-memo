import { createStore, compose } from 'redux';

// Reducer
import reducer from '../reducers';

// DevTools
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(reducer, composeEnhancers());

export default store;
