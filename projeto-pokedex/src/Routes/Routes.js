import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './../Pages/Home/Home'
import Pokedex from './../Pages/Pokedex/Pokedex'
import Details from './../Pages/Details/Details'


export const Router = () =>{

return(

    <BrowserRouter>
    <Routes>
    <Route path ='/home' index element={<Home/>}/>
    <Route index element={<Home/>}/>
    <Route path='/pokedex' element={<Pokedex/>}/>
    <Route path='/details' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
)
}