import { INCREMENT, DECREMENT } from '../constants/Index';
import { getProduct } from '../services/DemoApi';
export const increment = (num = 0, count = 1) => {
    return async (dispatch) => {
        const product = await getProduct(num, count);
        dispatch(setIncrement(num, product))
    }
}

export const setIncrement = (num, product) => {
    return { type: INCREMENT, payload: { num, product } }
}

export const decrement = (num = 0, count = 1) => {
    return async (dispatch) => {
        const product = await fetch('https://fakestoreapi.com/products/' + count)
            .then(res => res.json())
            .then(json => json)
        console.info(product)
        dispatch(setDecrement(num, product))
    }
}

export const setDecrement = (num, product) => {
    return { type: DECREMENT, payload: { num, product } }
}