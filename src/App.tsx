import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductsList />
      </div>
    </Provider>
  );
}

export default App;
