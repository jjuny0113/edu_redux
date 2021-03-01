const { createAsyncThunk } = require("@reduxjs/toolkit");

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

// const addPost = (data) => {
//   console.log("addPost");
//   return {
//     type: "ADD_POST",
//     data,
//   };
// };

const addPost = createAsyncThunk("post/add", async () => {
  return await delay(500, {
    title: "새 게시글",
    contene: "내용내용내용",
  });
});

module.exports = { addPost };
