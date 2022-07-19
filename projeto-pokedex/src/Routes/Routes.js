import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intro from '../Pages/Intro.js/Intro'
import Home from './../Pages/Home/Home'
import Pokedex from './../Pages/Pokedex/Pokedex'
import Details from './../Pages/Details/Details'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/intro" index element={<Intro />} />
        <Route index element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}
