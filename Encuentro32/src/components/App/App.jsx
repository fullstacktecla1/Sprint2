import './App.css';
import Tecler from '../Tecler/Tecler'

function App() {
  let teclers=[
    { 
      nombre:"Sebastian",
      sprint:2
    },
    { 
      nombre:"Leonardo",
      sprint:2
    }
  ]
  return (
    <div className="App">
      <h1>Hola mundo desde react</h1>
      {teclers.map((e)=><Tecler {...e}/>)}
    </div>
  );  
}
export default App;