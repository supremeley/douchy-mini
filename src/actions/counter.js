import {
  SET_CURRENT_TAB,
} from '../constants/counter'

export const setCurrentTab = (current) => {
  return {
    type: SET_CURRENT_TAB,
    current
  }
}

