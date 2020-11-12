const INITIAL_STATE = false;

const jobFetchReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_JOBFETCH_STATE") return action.payload;
  else return state;
};

export default jobFetchReducer;
