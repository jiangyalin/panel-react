import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_ASYNC
} from '../actions/actionsTypes'

const init = {
  asyncBool: false,
  asyncCountDown: 3
};

export default function illustration(state = init, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        asyncBool: true
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        asyncCountDown: state.asyncCountDown -1
      };
    case INCREMENT_ASYNC:
      return {
        ...state,
        asyncCountDown: 3
      };
    default:
      return state
  }
}