const { createSlice } = require("@reduxjs/toolkit");

const { logIn } = require("../actions/user");

const initialState = {
  isLoggingIn: false,
  data: null,
  prices: Array(10000)
    .fill()
    .map((v, i) => (i + 1) * 100),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(logIn.pending, (state, action) => {
        state.data = null;
        state.isLoggingIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoggingIn = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      }),
  // 다른 문법 addMatch, addDefaultCase라는 기능이 있음
  // .addMatch((state,action)=>{ 여러 액션에서 공통인거 사용할 때
  //   return action.type.includes('/pending')
  //  state.isLoading = true;
  // })
});

module.exports = userSlice;
