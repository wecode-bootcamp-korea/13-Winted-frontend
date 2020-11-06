const SET = "SET";
const ADD = "ADD";
const DELETE = "DELETE";
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
