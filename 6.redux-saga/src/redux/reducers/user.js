import { produce } from "immer";

const initialState = {
  isLoggingIn: false,
  data: null,
};

// 서버 비동기 액션
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

// 동기 요청
export const INCREMENT_NUMBER = "INCREMENT_NUMBER"; //리덕스로만 해결 가능

// immer의 기본 꼴
// nextState = produce(prevState,(draft)=>{}) draft는 복사본

// reducer의 역할 action dispatch했을 때 action을 바탕으로 다음 State를 만드는것
const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.data = null;
        draft.isLoggingIn = true;
        draft.isLoading = true; //로딩창!
        break;
      case LOG_IN_SUCCESS:
        draft.data = action.data;
        draft.isLoggingIn = false;
        draft.isLoading = false;
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
