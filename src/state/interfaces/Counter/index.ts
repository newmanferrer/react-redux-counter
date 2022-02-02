import { CounterActionTypes } from '../../action-types';

interface IIncrement {
 type: CounterActionTypes.INCREMENT;
}

interface IIncrement5 {
 type: CounterActionTypes.INCREMENT_5;
 payload: number;
}

interface IIncrement10 {
 type: CounterActionTypes.INCREMENT_10;
 payload: number;
}

interface IDecrement {
 type: CounterActionTypes.DECREMENT;
}

interface IDecrement5 {
 type: CounterActionTypes.DECREMENT_5;
 payload: number;
}

interface IDecrement10 {
 type: CounterActionTypes.DECREMENT_10;
 payload: number;
}

interface IReset {
 type: CounterActionTypes.RESET;
}

export type TCounterAction =
 | IIncrement
 | IIncrement5
 | IIncrement10
 | IDecrement
 | IDecrement5
 | IDecrement10
 | IReset;
