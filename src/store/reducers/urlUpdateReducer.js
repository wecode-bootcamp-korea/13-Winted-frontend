const INITIAL_STATE = false;

const urlUpdateReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_URL_UPDATE_STATE") return action.payload;
  else return state;
};

export default urlUpdateReducer;
