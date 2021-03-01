import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit"; //reselect
import { logIn } from "./redux/actions/user";
import { addPost } from "./redux/actions/post";
import userSlice from "./redux/reducers/user";

const priceSelector = (state) => state.user.prices;
// const sumPriceSelector = createSelector(priceSelector, (prices) =>
//   prices.reduce((a, c) => a + c, 0)
// );
// createSelector는 캐싱해주는 역할
// component와 독립적
// createSelector는 재사용 하면 안됨
// 하려면 아래처럼
const makeSumPriceSelector = () =>
  createSelector(priceSelector, (prices) => prices.reduce((a, c) => a + c, 0));

const sumPriceSelector = makeSumPriceSelector();

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const totalPrice = useSelector(sumPriceSelector);
  const [email, setEmail] = useState("");

  /**
   * const [isLoading,setIsLoading] = useState(false)
   * const [error,setError] = useState(false)
   * const [done,setDone] = useState(false)
   *
   * 그런데 하나의 비동기 요청이 1초에 4번씩 가고 한다면...
   * 해결책!
   */
  //  const [isLoading,setIsLoading] = useState({
  // 123123:{type:'LOGIN_LOADING'}
  // 134123:{type:'LOGIN_LOADING'}
  //  })
  //  const [error,setError] = useState({})
  //  const [done,setDone] = useState({})
  //  const [loadingIds,setLoadingIds] = userState([])

  // loading이 너무 많아졌을 때
  // const onClick = useCallback(async () => {
  //   const id = new DataCue().valueOf();
  //   setLoading(() => ({
  //     ...prev,
  //     [id]: { type: "LOGIN_LOADING" },
  //   }));
  //   setLoadingIds((prev)=>prev.concat(id))
  //   try {
  //     const reponse = await axios.post("/login");
  //     setLoading((prev) => ({
  //       ...prev,
  //       [id]: { type: "LOGIN_LOADING" },
  //     }));
  //     setDone((prev) => ({
  //       ...prev,
  //       [id]: { type: "LOGIN_LOADING" },
  //     }));
  //   } catch {
  //     setError(error);
  //   } finally {
  //     setLoading((prev) => {
  //       const newObj = JSON.parse(JSON.stringify(prev));
  //       delete newObj[id];
  //       return rewObj;
  //     });
  //   }
  // }, []);

  const onClick = useCallback(() => {
    dispatch(
      logIn({
        id: "zerocho",
        password: "비밀번호",
      })
    );
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, []);

  const onAddPost = useCallback(() => {
    dispatch(addPost());
  }, []);

  // 해당 컴포넌트에서만 사용하는 비동기일 때 사용법
  // const onClick = useCallback(async () => {
  //   setIsLoading(true)
  //   setDone(false)
  //   setError(false)
  //   try {
  //     const reponse = await axios.post("/login");
  //     setDone(true);
  //   } catch {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, []);

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  // const totalPrice = useMemo(() => prices.reduce((a, c) => a + c, 0), [prices]); //100만번 연산이라 가정
  // 불필요한 연산 덜해도 되는것을 얻고 의존성 배열에 있는 값이 바뀌었는지 연산해야함 만약 캐싱한 값 연산보다 의존성 배열 배뀌였는지 연산하는게 더 오래걸린다면 useMemo는 손해!
  // 이때 createSelector 사용

  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인 중</div>
      ) : user.data ? (
        <div>{user.data.nickname}</div>
      ) : (
        "로그인 해주세요."
      )}
      {!user.data ? (
        <button onClick={onClick}>로그인</button>
      ) : (
        <>
          <button onClick={onLogout}>로그아웃</button>
          <div>
            {/* <b>{prices.reduce((a, c) => a + c)}원</b> */}
            {/* 이렇게 되면 onChange가 일어날 때 마다 re-rendering되서 과부화가 걸릴 수 있음 그래서 이부분을 캐싱하는게 필요 */}
            {totalPrice}
            {/* 캐싱됨 */}
          </div>
          <input type="email" value={email} onChange={onChangeEmail} />
        </>
      )}
      <button onClick={onAddPost}>게시글 작성</button>
    </div>
  );
};

export default App;
