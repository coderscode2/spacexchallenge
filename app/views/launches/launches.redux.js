import {SET_LAUNCHES, initialState} from './launches.constants';

const launches = (state = initialState, action) => {
  switch (action.type) {
    case SET_LAUNCHES:
      return Object.assign({}, state, {
        launches: action.launches,
      });
    default:
      return state;
  }
};

export default launches;
