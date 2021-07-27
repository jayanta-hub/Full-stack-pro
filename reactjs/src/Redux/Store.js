import {createStore} from 'redux'
import {rootReducer} from './Reducer/rootReducer.jsx'
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(rootReducer, composeWithDevTools());   

export {store};
