import React from 'react'

import PokemonCard from '../components/PokemonCard'
import ScoreCard from '../components/ScoreCard'
import Form from '../components/Form'
import Navbar from '../components/Navbar'


const Hard = () => {
  return (
    <> 
     <Navbar/>
      <div className="p-8">
        <div className="p-4 rounded-md flex items-center justify-center flex-col">
          <PokemonCard/>
          <ScoreCard />
          <Form />
        </div>
      </div></>
  )
}

export default Hard