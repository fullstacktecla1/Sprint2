import { useState } from 'react';
import { createStore } from 'redux';
import contadorReducer from './reductores/contadorReducer';
let store = createStore(contadorReducer);
function App() {
  const[valor,setValor]=useState(store.getState());///NO lo manejaremos asi

  store.subscribe(()=>{setValor(store.getState())});///NO lo manejaremos asi

  return (
    <div>
      <h1>Hola Mundo Redux</h1>
      <h1>{valor}</h1>
      <button onClick={()=>{store.dispatch({type:'SUMAR'})}} >+1</button>
      <button onClick={()=>{store.dispatch({type:'RESTAR'})}} >-1</button>
      <button onClick={()=>{store.dispatch({type:'MULTIPLICAR',multiplicando:2})}} >x 2</button>
    </div>
  );
}

export default App;