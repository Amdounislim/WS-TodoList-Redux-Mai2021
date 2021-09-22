import { ADD_TASK, DELETE_TASK } from "../constants/actionsTypes"


export const addTask =(payload)=>{
    return {
        type:ADD_TASK,
        payload
    }
}
export const deleteTask =(payload)=>{
    return {
        type:DELETE_TASK,
        payload
    }
}