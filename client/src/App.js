import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home';
import PokemonCreate from './components/Pokemon/PokemonCreate'
import PokemonDetail from './components/Details/PokemonDetail'
import { useEffect } from 'react';
import {getPokemons} from './actions/index'
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPokemons()) 
}, [])
  return (
    <BrowserRouter>
    <div className="App">
    
      <Switch>
        <Route exact path= '/' component={LandingPage}/>
        <Route path = '/home' component={Home}/>
        <Route path= '/pokemon' component={PokemonCreate}/>
        <Route path= '/id/:id' component={PokemonDetail}/>

      
      </Switch>

     
    </div>
    </BrowserRouter>
  );
}

export default App;
