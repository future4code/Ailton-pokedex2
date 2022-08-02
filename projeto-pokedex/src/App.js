import {Router} from './Routes/Routes'
import React from "react"
import GlobalState from './Constants/GlobalState';
import { GlobalStyle } from './Style/PageDetailStyled';



function App() {  


  return (

    
      <GlobalState>
<GlobalStyle></GlobalStyle>
      <Router/>
      
      </GlobalState>
  );
}

export default App;
