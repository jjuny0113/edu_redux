const { createStore, applyMiddleware, compose } = require("redux");
const reducer = require("./reducers/index");
const { login, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");

initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
  comments: [],
  favoriate: [],
  history: [],
  likes: [],
  followers: [],
};

const firstMiddleware = (store) => (dispatch) => (action) => {
  //기능추가 공간
  console.log("로깅", action);
  dispatch(action); //기본기능
  //기능추가 공간
};

const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    // 비동기임을 알려주기 위해서,thunk야 비동기는 함수야! 니가 그 비동기를 실행시켜줘~!
    return action(store.dispatch, store.getState);
  }
  return dispatch(action);
};
const enhancer = compose(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducer, initialState, enhancer);

// ---------------------------------

store.dispatch(
  login({
    id: 1,
    name: "zerocho",
    admin: true,
  })
);

// console.log("2nd", store.getState());

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 1,
//     content: "안녕하세요, 리덕스",
//   })
// );

// console.log("3rd", store.getState());

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 1,
//     content: "안녕하세요, 리덕스",
//   })
// );

// console.log("4th", store.getState());

// store.dispatch(logOut());

// console.log("5th", store.getState());
