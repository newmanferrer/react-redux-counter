import { Dispatch } from 'redux';
import { CounterActionTypes } from '../../action-types/Counter';
import { TCounterAction } from '../../interfaces';

const increment = () => {
 return (dispatch: Dispatch<TCounterAction>) => dispatch({ type: CounterActionTypes.INCREMENT });
};

const increment5 = (num: number) => {
 return (dispatch: Dispatch<TCounterAction>) =>
  dispatch({ type: CounterActionTypes.INCREMENT_5, payload: num });
};

const increment10 = (num: number) => {
 return (dispatch: Dispatch<TCounterAction>) =>
  dispatch({ type: CounterActionTypes.INCREMENT_10, payload: num });
};

const decrement = () => {
 return (dispatch: Dispatch<TCounterAction>) => dispatch({ type: CounterActionTypes.DECREMENT });
};

const decrement5 = (num: number) => {
 return (dispatch: Dispatch<TCounterAction>) =>
  dispatch({ type: CounterActionTypes.DECREMENT_5, payload: num });
};

const decrement10 = (num: number) => {
 return (dispatch: Dispatch<TCounterAction>) =>
  dispatch({ type: CounterActionTypes.DECREMENT_10, payload: num });
};

const reset = () => {
 return (dispatch: Dispatch) => dispatch({ type: CounterActionTypes.RESET });
};

export const counterActionCreators = {
 increment,
 increment5,
 increment10,
 decrement,
 decrement5,
 decrement10,
 reset
};
