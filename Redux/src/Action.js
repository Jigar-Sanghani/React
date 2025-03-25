import { useDispatch } from "react-redux";
import { GETBLOG } from "./Action_type"
import { API } from "./config/Api"

export const fetchBlog = () => async (dispatch) => {

    const dispatch = useDispatch();

    try {

        const res = await API.get('/blog');
        dispatch({
            type: GETBLOG,
            payload: res.data
        });

    } catch (error) {

        console.error("Error fetching blog:", error);

    }
};