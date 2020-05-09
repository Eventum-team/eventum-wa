import {
    ADD_USER_ID, 
    ADD_ACCESS_TOKEN, 
    ADD_REFRESH_TOKEN
} from '../actions/actions';

const initialState = {
    userId: "",
    access: "",
    refresh: ""
};

function eventumApp(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_ID:
            return {
                ...state,
                userId: action.userId
            }
        case ADD_ACCESS_TOKEN:
            return Object.assign({}, state, {
                access: action.access
            });
        case ADD_REFRESH_TOKEN:
            return Object.assign({}, state, {
                refresh: action.refresh
            });
        default:
            return state;
    }
}

export default eventumApp;