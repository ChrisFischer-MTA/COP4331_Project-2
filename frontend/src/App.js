<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
=======
//import '../styles/App.css';
import LoginPage from './LoginPage.js';
>>>>>>> dafd673db06cdad12bf8af0073c02d4578bccd7a

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
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
	  <NavBar/>
=======
	  <LoginPage/>
>>>>>>> dafd673db06cdad12bf8af0073c02d4578bccd7a
    </div>
  );
}

export default App;
