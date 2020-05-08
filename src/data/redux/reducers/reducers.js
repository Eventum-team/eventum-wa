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
        case ADD_GROUP_ID:
            return Object.assign({}, state, {
                groupId: action.groupId
            });
        case ADD_EVENT_ID:
            return Object.assign({}, state, {
                eventId: action.eventId
            });
        default:
            return state;
    }
}

export default eventumApp;