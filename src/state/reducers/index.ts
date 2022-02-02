import { combineReducers } from 'redux';
import CounterReducer from './Counter';

const rootReducers = combineReducers({
 counter: CounterReducer
});

export default rootReducers;
export type TState = ReturnType<typeof rootReducers>;
