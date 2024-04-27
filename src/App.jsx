import { useEffect, useState } from 'react'
import './App.css'
import { PokemonList } from './components/PokemonList'
import axios from 'axios'

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
      setPokemon(res.data.results.map(p => p.name))
      console.log(res.data.results);
    })
  }, [])



  return (
    <>
      <PokemonList pokemon={pokemon} />
    </>
  )
}

export default App
