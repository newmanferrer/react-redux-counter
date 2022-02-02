import { Provider } from 'react-redux';
import { Counter } from './components';
import store from './state/store';

const App = (): JSX.Element => {
 return (
  <div className="container-fluid min-vw-100 min-vh-100 pt-5  d-flex flex-row justify-content-center align-items-start bg-success bg-gradient">
   <Provider store={store}>
    <Counter />
   </Provider>
  </div>
 );
};

export default App;
