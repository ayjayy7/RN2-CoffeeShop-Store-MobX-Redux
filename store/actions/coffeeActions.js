import * as actionTypes from "./types";
import axios from "axios";

export const getCoffeeShops = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const shops = res.data;
      dispatch({ type: actionTypes.GET_COFFEESHOPS, payload: shops });
    } catch (err) {
      console.error(err);
    }
  };
};
export const setCoffeeShopsLoading = () => {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.COFFEESHOPS_LOADING });
    } catch (err) {
      console.error(err);
    }
  };
};
