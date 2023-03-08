import {USER_REQUEST, USER_SUCESS, USER_DELETE } from "../constants/userConstants";

const userReducer = (state = { userList: null }, action) => {
    switch (action.type) {

        case USER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                userList: null
            }
        }

        case USER_SUCESS:
            return {
                ...state,
                userList: action.payload,
                isLoading: false
            }

        case USER_DELETE:
            const newList = state.userList.filter((val) => {
                return val._id != action.payload;
            })
            return {
                ...state,
                userList: newList,
                isLoading: false
            }

        default:
            return state;
    }
}

export default userReducer;