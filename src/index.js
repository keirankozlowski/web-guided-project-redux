import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';

import titleReducer from './reducers/titleReducer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(titleReducer, );

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement
);
