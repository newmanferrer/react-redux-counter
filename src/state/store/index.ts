import { applyMiddleware, createStore } from 'redux';
import rootReducers from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducers, {}, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
