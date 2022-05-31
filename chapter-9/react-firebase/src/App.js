import logo from './logo.svg';
import './App.css';
import firebase from './services/firebase';

import Register from './pages/Register';
import Login from './pages/Login';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Register />
      <Login />
      <User />
    </div>
  );
}

export default App;
