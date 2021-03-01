import { createSagaMiddleware } from "redux-saga";
import rootSaga from "./saga/index";

const { createStore, applyMiddleware, compose } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");

const reducer = require("./reducers/index");
const { login, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
};

const firstMiddleware = (store) => (dispatch) => (action) => {
  //기능추가 공간
  console.log("로깅", action);
  dispatch(action); //기본기능
  //기능추가 공간
};

// const thunkMiddleware = (store) => (dispatch) => (action) => {
//   if (typeof action === "function") {
//     // 비동기임을 알려주기 위해서,thunk야 비동기는 함수야! 니가 그 비동기를 실행시켜줘~!
//     return action(store.dispatch, store.getState);
//   }
//   return dispatch(action);
// };

const sagaMiddleware = createSagaMiddleware();
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(firstMiddleware, sagaMiddleware))
    : composeWithDevTools(applyMiddleware(firstMiddleware, sagaMiddleware));

const store = createStore(reducer, initialState, enhancer);
sagaMiddleware.run(rootSaga);

module.exports = store;
