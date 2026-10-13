import './App.css';
import fall from './fall.jpg'
function App() {
  return (
    <div className='App'>
      <header>
        <h1>personal blog </h1>
        <p>
          hi guys, my name is alex<br/><br/>
          <img src={fall} alt={fall} width={200} height={200}/><br/><br/>
          i wanted a space to talk a lot, share my growth and cool things i am up to. <br/>
        </p>
        </header>
    </div>
  );
}

export default App;
