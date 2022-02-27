import { INCREMENT, DECREMENT } from '../constants/Index';
export const increment = (num = 0) => {
    return { type: INCREMENT, payload: num }
}

export const decrement = (num = 0) => {
    return { type: DECREMENT, payload: num }
}