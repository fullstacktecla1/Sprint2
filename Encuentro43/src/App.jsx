import './App.css';
import Login from './Login';
import { Provider } from 'react-redux'
function App(props) {
  return (
    <div className="App">
      <Provider store={props.store}>
        <Login/>
      </Provider>
    </div>
  );
}

export default App;