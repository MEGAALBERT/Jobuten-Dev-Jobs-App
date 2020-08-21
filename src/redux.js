import { createStore } from "redux";

const defaultState = {
    loginName: ""
}

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case "SHOW_LOGIN_NAME":
            return {...state, loginName: action.loginName }
            default:
        return state;
    }
}

const store = createStore(reducer);

export default store;