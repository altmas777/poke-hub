
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import { fetchPokemon } from '../../../context/PokeService'
import { useContext, useEffect } from 'react'
import PokeContext from '../../../context/PokeContext'
import pokebg from '../../../assets/drawing-pokemon-pokeball-png-removebg-preview.png'

const Pokenoob = () => {

const { pokeData, dispatch, visibility, score,life } = useContext(PokeContext)

 const { width, height } = useWindowSize()



 const getPokemon = async () => {
        const data = await fetchPokemon()

        setTimeout(() => {
              dispatch({
            type: "FETCH_POKEMON",
            payload: data
        })
            
        },3000 );
      
    }


    useEffect(() => {
        getPokemon()
    },[score,life] )


    if (!pokeData) {
        return (
            <div className="w-75 h-75 bg-red-200 p-4 rounded-full flex items-center justify-center">
                <img className='h-50 rounded-full' src="https://i.pinimg.com/originals/15/3c/fb/153cfb7dcfb406a368a3dc4e35e37efb.gif" alt="" />
            </div>
        )
    }

    if (score === 100) {
        return (
            <Confetti
                width={width}
                height={height}
            />
        )
    }



  return (
    <>
    <div className={!visibility ? "w-75 h-75 bg-yellow-200 p-4 rounded-full flex items-center justify-center z-12 " : "w-75 h-75 bg-yellow-200 p-4 rounded-full flex items-center justify-center z-23"}>
               <img className='h-100 w-100 absolute z--5' src={pokebg} alt="bg" />
               <img className={visibility ? 'h-50 w-50  z-10' : 'h-50 w-50 z-10'} src={pokeData?.pokemonImage} alt="" />
           </div>
    </>
  )
}

export default Pokenoob