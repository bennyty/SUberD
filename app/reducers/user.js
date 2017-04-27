import actionNames from '../actions';

// This will be returned as the initial state of the state subtree
const initialState = {
    name: "Curran Kalia",
	phoneNumber: "6312523291"
};

// This pure function defines how to take an action and the current state and return the new state
const user = (state = initialState, action) => {
    switch (action.type) {
        case actionNames.SET_USER_NAME:
            return Object.assign({}, state, {
                name: action.payload.name
            });
        case actionNames.SET_USER_PHONENUMBER:
            return Object.assign({}, state, {
                phoneNumber: action.payload.phoneNumber
            });
        default:
            return state
    }
}

export default user;
