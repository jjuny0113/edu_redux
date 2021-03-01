import { produce } from "immer";

const initialState = {
  isLoggingIn: false,
  data: null,
};

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";

// immer의 기본 꼴
// nextState = produce(prevState,(draft)=>{}) draft는 복사본

// reducer의 역할 action dispatch했을 때 action을 바탕으로 다음 State를 만드는것
const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      case LOG_IN_SUCCESS:
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case LOG_IN_FAILURE:
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      case "LOG_OUT":
        draft.data = null;
        break;
      default:
        break;
    }
  });
};

module.exports = userReducer;
