import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_FAIL,
  FETCH_DATA_SUCCESS
} from "./actionTypes";
import { isFetchingData } from "./reducers/data";

function fetchDataBegin() {
  return {
    type: FETCH_DATA_BEGIN
  };
}

function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_FAIL,
    data
  };
}

function fetchDataFail(error) {
  return {
    type: FETCH_DATA_SUCCESS,
    error
  };
}

export function fetchData() {
  return async (dispatch, getState, { api }) => {
    if (isFetchingData(getState())) {
      return false;
    }

    dispatch(fetchDataBegin());

    try {
      const data = await api.fetchData();

      console.log(data);

      return dispatch(fetchDataSuccess(data));
    } catch (error) {
      console.error(error);
      return dispatch(fetchDataFail(error));
    }
  };
}

export default {
  fetchData
};
