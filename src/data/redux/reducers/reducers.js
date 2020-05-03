import {
    ADD_USER_ID, 
    ADD_ACCESS_TOKEN, 
    ADD_REFRESH_TOKEN,
    ADD_EVENT_ID,
    ADD_GROUP_ID, 
} from '../actions/actions';

const initialState = {
    userId: "",
    access: "",
    refresh: "",
    groupId: "",
    eventId: ""
};

function eventumApp(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_ID:
            return Object.assign({}, state, {
                userId: action.id
            });
        case ADD_ACCESS_TOKEN:
            return Object.assign({}, state, {
                access: action.access
            });
        case ADD_REFRESH_TOKEN:
            return Object.assign({}, state, {
                refresh: action.refresh
            });
        case ADD_GROUP_ID:
            return Object.assign({}, state, {
                groupId: action.id
            });
        case ADD_EVENT_ID:
            return Object.assign({}, state, {
                eventId: action.id
            });
        default:
            return state;
    }
}

export default eventumApp;