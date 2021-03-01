import {
  all,
  call,
  fork,
  put,
  take,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
} from "../reducers/user";

const HELLO_SAGA = "HELLO_SAGA";

function loginAPI() {}

function* login() {
  try {
    // yield call(logger) // logger 10초 걸림 이게 비동기로 실행된다면 너무 오래 걸리니 비동기로~!
    // yield fork(logger)
    yield call(loginAPI);
    yield put({
      //dispatch와 동일
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    console.log(e);
    yield put({ LOG_IN_FAILURE });
  }
}
// put -> saga의 dispatch
// function* watchLogin() {
//   yield take(LOG_IN);
//   yield delay(2000);
//   yield put({
//     type: LOG_IN_SUCCESS,
//   });
// }
// 로그인이라는 액션이 실행되면 LOG_IN_SUCCESS액션 실행

//race, cancel,select,throttle,debounce 같은 api들이 있다

function* byeSaga() {
  yield put({
    type: "BYE_SAGA",
  });
}

function* watchHello() {
  yield takeEvery(HELLO_SAGA, byeSaga);
}
// takeLatest는 이전 요청이 끝나지 않았다면, 이전 요청을 취소합니다

// function* watchHello() {
//   while (ture) {
//     console.log(1);
//     console.log(2);
//     yield;
//     console.log(3);
//     console.log(4);
//   }
// }

export default function* userSaga() {
  yield all([fork(watchHello)]);
}

// call과 fork의 차이

// 공통점 : 둘다 함수를 실행
// call 동기 호출 -> 순서를 지켜야 하는 경우
// fork 비동기 호출 -> 순서 신경 안쓰는 경우
