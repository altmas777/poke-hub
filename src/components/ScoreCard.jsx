import { useContext } from "react"
import PokeBall from "../assets/pokeball.png"
import PokeContext from "../context/PokeContext"

const ScoreCard = () => {

    const { score, life } = useContext(PokeContext)


    return (

        <div className='w-full my-6 flex items-center justify-center space-x-110'>
            <h2 className='text-lg font-bold'>Score : {score}</h2>
            <ul className='flex space-x-2'>
                {
                    life === 3 ? (<>
                    <div className="flex items-center space-x-2 bg-gray-500 px-3 py-1 rounded-full">
                    <li>
                        <h1 className='text-lg font-bold text-green-200 '>3</h1>
                    </li>
                        <li>
                            <img src={PokeBall} className="h-8" alt="" />
                        </li>
                        <li>
                            <img src={PokeBall} className="h-8" alt="" />
                        </li>
                        <li>
                            <img src={PokeBall} className="h-8" alt="" />
                        </li>
                        </div>
                    </>) : life === 2 ? (<>
                    <div className="flex items-center space-x-2 bg-gray-500 px-3 py-1 rounded-full">
                        <li>
                        <h1 className='text-lg font-bold text-yellow-200 '>2</h1>
                    </li>
                        <li>
                            <img src={PokeBall} className="h-8" alt="" />
                        </li>
                        <li>
                            <img src={PokeBall} className="h-8" alt="" />
                        </li>
                    </div>
                    </>) : (<>
                       <div className="flex items-center space-x-2 bg-gray-500 px-3 py-1 rounded-full">
                        <li>
                        <h1 className='text-lg font-bold text-200 '>1</h1>
                    </li>
                        <li>
                            <img src={PokeBall} className="h-8" alt="" />
                        </li>
                    </div>
                    </>)
                }
            </ul>
        </div>
    )
}

export default ScoreCard
