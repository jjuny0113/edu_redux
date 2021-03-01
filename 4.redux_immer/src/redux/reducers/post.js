import { produce } from "immer";

const initialState = [];

const PostReducer = (prevState = initialState, action) => {
  produce(prevState, (draft) => {
    switch (action.type) {
      case "ADD_POST":
        draft.push(action.data);
        break;
      default:
        break;
    }
  });
};

module.exports = PostReducer;
