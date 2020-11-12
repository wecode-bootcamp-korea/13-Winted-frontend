const SET = "SET";
const ADD = "ADD";
const DELETE = "DELETE";
const SET_JOBFETCH_STATE = "SET_JOBFETCH_STATE";
const SET_URL_UPDATE_STATE = "SET_URL_UPDATE_STATE";

export const setFilter = jobFilters => {
  return {
    type: SET,
    payload: jobFilters
  };
};

export const addFilter = jobFilters => {
  return {
    type: ADD,
    payload: jobFilters
  };
};

export const deleteFilter = jobFilters => {
  return {
    type: DELETE,
    payload: jobFilters
  };
};

export const setJobLoading = bool => {
  return {
    type: SET_JOBFETCH_STATE,
    payload: bool
  };
};

export const setUrlLoading = bool => {
  return {
    type: SET_URL_UPDATE_STATE,
    payload: bool
  };
};
