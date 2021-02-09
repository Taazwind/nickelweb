import logo from './img/Logo_Nickel.png';
import './App.css';
import Button from 'components/atoms/Button';
import Logo from 'components/atoms/Logo';

function App() {
  function onButtonClick(event) {
    console.log("oui")
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Button text="koukou" onClick={onButtonClick} message="toi"/>
    </div>
  );
}

export default App;
