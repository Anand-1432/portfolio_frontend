import { USER_SUCESS, USER_DELETE } from "../constants/userConstants";

const userReducer = (state = { userList: null }, action) => {
    switch (action.type) {
        case USER_SUCESS:
            return {
                ...state,
                userList: action.payload
            }

        case USER_DELETE:
            const newList = state.userList.filter((val) => {
                return val._id != action.payload;
            })
            return {
                ...state,
                userList: newList
            }

        default:
            return state;
    }
}

export default userReducer;