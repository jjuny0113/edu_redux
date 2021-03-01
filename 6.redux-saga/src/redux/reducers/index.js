const { combineReducers } = require("redux");
const userReducer = require("./user");
const PostReducer = require("./post");

const rootReducer = combineReducers({
  user: userReducer,
  posts: PostReducer,
});

export default rootReducer;
