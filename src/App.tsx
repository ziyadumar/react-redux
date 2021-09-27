import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import allReducers from './reducers';
import { decrement, increment } from './actions';
import { useAppDispatcher, useAppSelector } from './hooks';

function App() {
  const counter = useAppSelector(state => state.counter);
  const dispatch = useAppDispatcher();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Hello World {counter}
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </header>
    </div>
  );
}

export default App;
