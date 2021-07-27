import {GM,GN} from "./message.action"
let initialstate = {
    message:"Hello"
}
let messageReducer=(state=initialstate,action) =>{
    switch(action.type){
        case GM:
        return{message:"Good morning"}
        case GN:
        return{message:"Good night"}

        default:
            return state;
    }

}
export {messageReducer};