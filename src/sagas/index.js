import { put, takeLatest, all } from 'redux-saga/effects';


function* fetchPosts(actionObj) {
  // http://react-cdp-api.herokuapp.com/movies
  // const json = yield fetch(`https://newsapi.org/v1/articles?source=${actionObject.channel}&apiKey=${MY_API_KEY}`)
  const json = yield fetch(`http://react-cdp-api.herokuapp.com/movies?search=${actionObj.string}&searchBy=title`)
    .then(response => response.json());// .then((res) => { console.log('response object', res); });

  // .then((response) => { console.log(response.title); console.log(response.tagline); });

  // const json = yield fetch(`https://newsapi.org/v1/articles?source=${actionObject.channel}&apiKey=${MY_API_KEY}`).then(response => response.json());

  yield put({ type: 'RECEIVED_MOVIE', json: json.data });
}

function* watchGetPosts() {
  yield takeLatest('REQUEST_POSTS', fetchPosts);
}


export default function* rootSaga() {
  yield all([
    watchGetPosts(),
  ]);
}
