import logo from './logo.svg';
import Hello from './Hello';
import HelloAgain from './HelloAgain';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
import Student from './Student';
import Kotak from './Kotak';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <CounterHooks /> */}

      <Student />

      <Kotak />

      {/* <Hello
        name="binar student"
        age="20"
      />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Helo Binar Student</h1>
      </header>

      <Counter />

      <HelloAgain /> */}
    </div>
  );
}

export default App;
