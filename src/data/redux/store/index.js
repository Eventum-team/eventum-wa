import { createStore } from 'redux'
import eventumApp from '../reducers/reducers'

const store = createStore(eventumApp);


export default store;