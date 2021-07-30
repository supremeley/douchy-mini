import { SET_CURRENT_TAB } from "../constants/counter";

const INITIAL_STATE = {
  currentTab: 0,
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: action.current,
      };
    default:
      return state;
  }
}
