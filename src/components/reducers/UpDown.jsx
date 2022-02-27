import { INCREMENT, DECREMENT } from '../constants/Index';
const initialStateCount = 0;
const changeCount = (state = initialStateCount, action) => {
    switch (action.type) {
        case INCREMENT:
            console.info('action I', action, state)

            return state + action.payload;
            break;
        case DECREMENT:
            console.log('action D', action, state)
            return state - action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default changeCount;