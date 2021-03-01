const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const reducer = require("./reducers/index");

const firstMiddleware = (store) => (dispatch) => (action) => {
  //기능추가 공간
  console.log("로깅", action);
  dispatch(action); //기본기능
  //기능추가 공간
};

const store = configureStore({
  reducer,
  // preloadedState: 서버사이드 렌더링 전용
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firstMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

module.exports = store;
