import _ from "lodash";
import { combineReducers } from "redux";

import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_FAIL,
  FETCH_DATA_SUCCESS
} from "../actionTypes";

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      if (!action.data) {
        return state;
      }
      return _.keyBy(action.data, "id");
    default:
      return state;
  }
};

const allIdsOrdered = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      console.log("All ids ordered", action);
      if (!action.data) {
        return state;
      }
      return action.data.map(data => data.id);
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return true;
    case FETCH_DATA_SUCCESS:
      return false;
    case FETCH_DATA_FAIL:
      return false;
    default:
      return state;
  }
};

const data = combineReducers({
  byId,
  allIdsOrdered,
  isFetching
});

export default data;

// Positions state selectors
export const getAllDataAsOrderedArray = state =>
  state.data.allIdsOrdered.map(id => state.data.byId[id]);

export const getAllData = state => state.positionsdatabyId;

export const isFetchingData = state => state.data.isFetching;

export const isEmptyData = state => state.data.allIdsOrdered.length === 0;
