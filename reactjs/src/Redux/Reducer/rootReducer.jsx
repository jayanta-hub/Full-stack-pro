import {combineReducers } from "redux";

import {messageReducer} from '../Message/message.reducer.js'
let rootReducer = combineReducers({message:messageReducer})
export {rootReducer}