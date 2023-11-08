import hLogo from '../assets/holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils.js';

function App() {
  return (
    <div className="App-function">
      <div className="App-header">
        <img src={hLogo} alt="Holberton Logo">
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
	<label htmlFor="login-email">Email: </label>
	<input id="login-email" name="login-email" type="email">

	<label htmlFor="login-password">Password: </label>
        <input id="login-password" name="login-password" type="password">
	<button>Ok</button>
      </div>

      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
