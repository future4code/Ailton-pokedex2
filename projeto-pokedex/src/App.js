import {Router} from './Routes/Routes'
import {BASE_URL} from './Constants/Url'
import {GetPokemons} from './Hooks/useRequestData'
import {Context} from './Constants/createContext'

function App() {  

  const [data, isLoading, error] = GetPokemons(`${BASE_URL}`);
  const Provider = Context.Provider;
  // console.log(Provider)

  const value ={
    pokemons: data,
  }

  return (

    <div>
      <Provider value={value}>

      <Router></Router>
      </Provider>
      
    </div>
  );
}

export default App;
