import { DECREMENT, INCREMENT, SET } from "./actions"

export const initialState = { counter: 0 }
/**
 * All the validation ,type conversion, state formating  should happen to reducer only
 */

export const reducer = (state = initialState, action) => {
    if (action.type = INCREMENT) {
        return { counter: state.counter + 1 }
    }
    if (action.type = DECREMENT) {
        return { counter: state.counter - 1 }
    }
    if (action.type = SET) {
        return { counter: parseInt(action.payload, 10) }
    }
    return state
}