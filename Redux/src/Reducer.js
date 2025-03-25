import { GETBLOG } from "./Action_type";

const initialState = {
    blogs: [],
    loading: false,
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETBLOG:
            return {
                ...state,
                blogs: action.payload,
                loading: false
            };

        default:
            return state;
    }
};

export default blogReducer;
