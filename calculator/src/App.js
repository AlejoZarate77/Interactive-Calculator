import './App.css';
//import image
import Logo from './img/Calculator_30001.png'
//import button
import Button from './components/Button.js'

function App() {
  return (
    <div className='App'>
      <div className='logo-container'>
        <img
          src={Logo}
          className='Logo'
          alt='img logo' />
      </div>
      <div className='calculator-container'>
        <div className='row'>
          <Button>1</Button>
          <Button>+</Button>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
