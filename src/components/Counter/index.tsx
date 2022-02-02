import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { counterActionCreators } from '../../state/action-creators/Counter';
import { TState } from '../../state/reducers';

export const Counter: React.FC = (): JSX.Element => {
 const counter = useSelector((state: TState) => state.counter);
 const dispatch = useDispatch();

 const { decrement5, decrement, decrement10, reset, increment, increment5, increment10 } =
  bindActionCreators(counterActionCreators, dispatch);

 return (
  <div className="container-fluid min-vw-50 p-5 text-white text-opacity-75 bg-dark border border-3 border-white rounded rounded-3 shadow-lg">
   <h1 className="text-center mb-5 fs-1 fw-bold text-decoration-underline">
    REACT REDUX COUNTER APP
   </h1>

   <h2 className="mb-5 text-center text-capitalize fs-2 fw-bold">Counter: {counter}</h2>

   <div className="container d-flex flex-row justify-content-center aling-items-center">
    <button className="btn btn-success me-3" onClick={() => decrement10(10)}>
     -10
    </button>

    <button className="btn btn-success me-3" onClick={() => decrement5(5)}>
     -5
    </button>

    <button className="btn btn-success me-3" onClick={() => decrement()}>
     -1
    </button>

    <button className="btn btn-danger ms-2 me-4" onClick={() => reset()}>
     0
    </button>

    <button className="btn btn-success me-3" onClick={() => increment()}>
     +1
    </button>

    <button className="btn btn-success me-3" onClick={() => increment5(5)}>
     +5
    </button>

    <button className="btn btn-success me-3" onClick={() => increment10(10)}>
     +10
    </button>
   </div>
  </div>
 );
};
