import {GM,GN} from './message.action'
let initialState  = {
    Name:"Garu",
    Age:"27",
    Gender:"Male",
    Message:""
}
let messageReducer = (state=initialState, action)=>{
    console.log(action);

    switch(action.type){
        case GM:
        return {...state, Age:26,Message:"Good Morning"}
        case GN:
        return { ...state ,Age:28, Message:"Good Night"}
        default:
            return state

    };

};
export {messageReducer};