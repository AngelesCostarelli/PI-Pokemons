import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home';
import PokemonCreate from './components/Pokemons/PokemonCreate'
import SearchBar from './components/Search/Search';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
      <Switch>
        <Route exact path= '/' component={LandingPage}/>
        <Route path = '/home' component={Home}/>
        <Route path= '/pokemon' component={PokemonCreate}/>

      
      </Switch>

     
    </div>
    </BrowserRouter>
  );
}

export default App;
