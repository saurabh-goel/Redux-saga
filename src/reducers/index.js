import { SELECT_CHANNEL, REQUEST_POSTS, RECEIVED_MOVIE, SET_STRING } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_CHANNEL:
      return { ...state, channel: action.channel };
    case REQUEST_POSTS:
      return { ...state, loading: true };
    case RECEIVED_MOVIE:
      return { ...state, json: action.json, loading: false };
    case SET_STRING:
      return { ...state, string: action.string };
    default:
      return state;
  }
};

export default reducer;
