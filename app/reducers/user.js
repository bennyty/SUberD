import {
	SET_USER_NAME,
	SET_USER_PHONENUMBER
} from '../actions'

const initialState = {
    name: null,
	phoneNumber: null
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_NAME:
            return Object.assign({}, state, {
                name: action.name
            });
        case SET_USER_PHONENUMBER:
            return Object.assign({}, state, {
                phoneNumber: action.phoneNumber
            });
        default:
            return state
    }
}

export default user;
