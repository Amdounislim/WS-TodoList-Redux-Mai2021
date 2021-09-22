import { ADD_TASK, DELETE_TASK } from "../constants/actionsTypes";


const initialState = {
    list: []
}


const reducerTask = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, list: [...state.list, action.payload] }

        case DELETE_TASK:
            return { ...state, list: state.list.filter(el => el.id !== action.payload) }

        default:
            return state;
    }
}

export default reducerTask