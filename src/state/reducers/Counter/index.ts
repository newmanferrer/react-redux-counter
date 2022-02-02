import { TCounterAction } from '../../interfaces';
import { CounterActionTypes } from '../../action-types';

const initialState = 0;

const CounterReducer = (state = initialState, action: TCounterAction) => {
 switch (action.type) {
  case CounterActionTypes.INCREMENT:
   return state + 1;

  case CounterActionTypes.INCREMENT_5:
   return state + action.payload;

  case CounterActionTypes.INCREMENT_10:
   return state + action.payload;

  case CounterActionTypes.DECREMENT:
   return state - 1;

  case CounterActionTypes.DECREMENT_5:
   return state - action.payload;

  case CounterActionTypes.DECREMENT_10:
   return state - action.payload;

  case CounterActionTypes.RESET:
   return initialState;

  default:
   return state;
 }
};

export default CounterReducer;
