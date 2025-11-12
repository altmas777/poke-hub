import { createContext, useReducer } from "react";
import PokeReducer from "./PokeReducer";

const PokeContext = createContext()

export const PokeProvider = ({ children }) => {

    const initialState = {
        pokeData: null,
        score: 0,
        life: 3,
        visibility: true
    }


    const [state, dispatch] = useReducer(PokeReducer, initialState)


    return (
        <PokeContext.Provider value={{ ...state, dispatch }}>
            {children}
        </PokeContext.Provider>
    )
}


export default PokeContext