// const PostReducer = (prevState = initialState, action) => {
//   produce(prevState, (draft) => {
//     switch (action.type) {
//       case "ADD_POST":
//         draft.push(action.data);
//         break;
//       default:
//         break;
//     }
//   });
// };

const { createSlice } = require("@reduxjs/toolkit");
const { addPost } = require("../actions/post");

const initialState = {
  data: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearpost(state, action) {
      state.data = [];
    },
  },
  extraReducers: (builder) =>
    builder // 비동기 액션
      .addCase(addPost.pending, (state, action) => {
        // immer에서 불변성이 깨질 때 = state 자체를 바꾸는 경우
        // 해결책
        // state = 123;
        // return state => 이렇게 state를 내보내 줘야함
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {}),
});

module.exports = postSlice;
