const { combineReducers } = require("redux");
const userSlice = require("./user");
const PostSlice = require("./post");

module.exports = combineReducers({
  user: userSlice.reducer,
  posts: PostSlice.reducer,
});
