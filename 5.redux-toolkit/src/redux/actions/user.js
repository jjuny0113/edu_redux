const { createAsyncThunk } = require("@reduxjs/toolkit");

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

exports.logIn = createAsyncThunk("user/login", async (data, thunkAPI) => {
  console.log(data);
  //비동기요청 pending(loading) fullfilled(success) rejected(failure)
  return await delay(500, {
    userId: 1,
    nickname: "zerocho",
  });
});

// const login = () => {
//   // 비동기 액션 creator
//   //비동기임을 알려주기위해 함수를 리턴
//   return (dispatch, getState) => {
//     //async action
//     dispatch(logInRequest());
//     try {
//       setTimeout(() => {
//         dispatch(
//           logInSuccess({
//             userId: 1,
//             nickName: "zerocho",
//           })
//         );
//       }, 2000);
//       // 동기 액션의 실행 순서를 조작
//       // axios.post().then().catch()으로 나중에 대체
//     } catch (e) {
//       dispatch(logInFailure(e));
//     }
//   };
// };
