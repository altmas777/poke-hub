import React from 'react'
import Pokekart from '../components/Normal/Pokekart'
import ScoreCard from '../components/ScoreCard'
import Form from '../components/Form'
import Farm from '../components/Normal/Farm'
import Pokenoob from '../components/Normal/easy/Pokenoob'
import Navbar from '../components/Navbar'


const Easy = () => {
  return (
    <>
     <Navbar/>
 <div className="p-8">
        <div className="p-4 rounded-md flex items-center justify-center flex-col">
          <ScoreCard />
          <Pokenoob/>
          <Farm/>

        </div>
      </div>

    </>
  )
}

export default Easy