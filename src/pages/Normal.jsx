import React from 'react'

import PokemonCard from '../components/PokemonCard'
import ScoreCard from '../components/ScoreCard'
import Form from '../components/Form'
import Pokekart from '../components/Normal/Pokekart'
import Farm from '../components/Normal/Farm'
import Navbar from '../components/Navbar'

const Normal = () => {
  return (
    <>
     <Navbar/>
      <div className="p-8">
        <div className="p-4 rounded-md flex items-center justify-center flex-col">
         <Pokekart/>
          <ScoreCard />
          <Farm/>
        </div>
      </div></>
  )
}

export default Normal