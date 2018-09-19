export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVED_MOVIE = 'RECEIVED_MOVIE';
export const SET_STRING = 'SET_STRING';


export const getChannel = channel => ({
  type: SELECT_CHANNEL,
  channel,
});

export const requestPosts = string => ({
  type: REQUEST_POSTS,
  string,
});

export const setSearchString = string => ({
  type: SET_STRING,
  string,
}
);
