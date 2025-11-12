import React, { useContext, useState } from 'react'
import PokeContext from '../../context/PokeContext'


const Farm = () => {

    const { pokeData, dispatch, score, life } = useContext(PokeContext)

        const [selected, setSelected] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isCorrect, setIsCorrect] = useState(null)


    const restartGame = () => {
        window.location.href = "/"
    }

    


    const handleSubmit = (e) => {
        e.preventDefault()

        let correct = false
        if (selected === pokeData.name) {
            dispatch({ type: "INCREASE_SCORE" })
    
        } else {
            dispatch({ type: "DECREASE_LIFE" })
        }

        setIsCorrect(correct)
        setIsSubmitted(true)



        setTimeout(()=>{
          setSelected("")
            setIsSubmitted(false)
            setIsCorrect(null)
        },)

    } 
     if (score === 100) {
        return (
            <>
                <h1 className='text-2xl font-bold text-green-500'>Congratulation You Won The Game</h1>
                <button onClick={restartGame} className='bg-blue-500 hover:bg-blue-600 cursor-pointer p-2 my-4 text-lg font-bold w-full rounded-md text-white'>Play Again</button>
            </>
        )
    }
    if (life === 0) {
        return (
            <>
                <h1 className='text-2xl font-bold text-red-500'>You Lose The Game</h1>
                <button onClick={restartGame} className='bg-blue-500 hover:bg-blue-600 cursor-pointer p-2 my-4 text-lg font-bold w-full rounded-md text-white'>Play Again</button>
            </>
        )
    }



  return (
    <>

    <form onSubmit={handleSubmit} className="my-4 border border-gray-300 rounded-md  w-full p-4">
            <h2 className="text-center font-bold mb-4">Choose correct POkEMON</h2>



            <div className="grid grid-cols-2 gap-5 ">


            {pokeData?.options?.map((option, index) => {
                    let optionClass = "bg-red-100 hover:bg-red-200"

                    if (isSubmitted) {
                        if (option === pokeData.name && option === selected) {
                            optionClass = "bg-green-500 text-white"
                        } else if (option === selected && !isCorrect) {
                            optionClass = "bg-red-500 text-white"
                        }
                    } else if (selected === option) {
                        optionClass = "bg-gray-500 text-white"
                    }

                    return (
                        <label
                            key={index}
                            className={`cursor-pointer border rounded-md py-2 px-4 text-center font-semibold transition-colors duration-300 ${optionClass}`}
                        >
                            <input
                                type="radio"
                                name="pokedata"
                                value={option}
                                checked={selected === option}
                                onChange={(e)=>setSelected(e.target.value)}
                                className="hidden"
                            />
                            {option}
                        </label>
                    )
                })}
            </div>

            <button
                type="submit"
                disabled={!selected}
                className={`my-4 rounded-md w-full py-2 font-bold
            ${selected ? "bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
            >
                Submit
            </button>
        </form>
    </>
  )
}

export default Farm