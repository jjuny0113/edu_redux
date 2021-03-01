const login = () => {
  // 비동기 액션 creator
  //비동기임을 알려주기위해 함수를 리턴
  return (dispatch, getState) => {
    //async action
    dispatch(logInRequest());
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickName: "zerocho",
          })
        );
      }, 2000);
      // 동기 액션의 실행 순서를 조작
      // axios.post().then().catch()으로 나중에 대체
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";

const logInRequest = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

const logInSuccess = (data) => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};

const logInFailure = (error) => {
  return {
    type: LOG_IN_FAILURE,
    error,
  };
};

// const login = (data) => {
//   // 동기 액션 creator
//   return {
//     type: "LOG_IN",
//     data,
//   };
// };

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

module.exports = { login, logOut };
