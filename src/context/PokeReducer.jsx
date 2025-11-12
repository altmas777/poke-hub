const PokeReducer = (state, action) => {
    switch (action.type) {


  case "GET_POKEMON":
            return {
                ...state,
                pokemon: action.payload
            }
        

        case "FETCH_POKEMON":
            return {
                ...state,
                visibility: true,
                pokeData: action.payload
            }

        case "INCREASE_SCORE":
            return {
                ...state,
                score: state.score + 10,
                visibility: false
            }

        case "DECREASE_LIFE":
            return {
                ...state,
                life: state.life - 1,
                visibility: false
            }
            
        default:
            return state
    }
}


export default PokeReducer