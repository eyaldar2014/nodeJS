import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import react from 'react';

function App() {

  react.useEffect(()=>{
      // fetch('http://localHost:5000/routes/tryConnection')
      axios.get('http://localHost:5000/routes/tryConnection').then(res=>{
        console.log(res)
      })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
