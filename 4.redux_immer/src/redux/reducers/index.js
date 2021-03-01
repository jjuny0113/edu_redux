const { combineReducers } = require("redux");
const userReducer = require("./user");
const PostReducer = require("./post");

module.exports = combineReducers({
  user: userReducer,
  posts: PostReducer,
});
