const { createStore } = require("redux");

const reducer = (prevState, action) => {
  //reducer의 역할: 새로운 state만들어 주기
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: 12,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        compC: action.data,
      };
    default:
      return prevState; // return이 없어서 state를 만들어 주지 않음
  }
};

const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
  // react-redux안에 들어있음
  console.log("change");
  // 화면 바꿔주는 코드
});

console.log("1st", store.getState());

// action

//createAction
const changeComA = (data) => {
  return {
    //action
    type: "CHANGE_COMP_A",
    data,
  };
};

store.dispatch(changeComA("b"));

console.log("2nd", store.getState());
