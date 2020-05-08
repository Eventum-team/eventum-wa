import { createStore } from 'redux'
import eventumApp from '../reducers/reducers'

const store = createStore(eventumApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;