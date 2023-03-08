import axios from "axios";
import { USER_SUCESS, USER_DELETE, USER_REQUEST } from "../constants/userConstants";


export const addUser = (userData) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("https://portfolio-90kb.onrender.com/contact", userData, config);
    console.log("message send sucessfully....!");
  } catch (error) {
    console.log(error);
  }
}

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.get("https://portfolio-90kb.onrender.com/messages", config);
    dispatch({ type: USER_SUCESS, payload: data.data })
  } catch (error) {
    console.log(error);
  }
}


export const deleteUser = (id) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("https://portfolio-90kb.onrender.com/del", { id }, config);
    console.log(data.message);
    dispatch({ type: USER_DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
} 