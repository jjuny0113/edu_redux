import React from "react";
import { connect } from "react-redux";
import { login, logOut } from "./redux/actions/user";

class App {
  onClick = () => {
    this.props.dispatchLogIn({
      id: "zerocho",
      password: "비밀번호",
    });
  };

  onLogout = () => {
    this.props.dispatchLogOut();
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        {user.isLoggingIn ? (
          <div>로그인 중</div>
        ) : user.data ? (
          <div>{user.data.nickName}</div>
        ) : (
          "로그인 해주세요."
        )}
        {!user.data ? (
          <button onClick={this.onClick}>로그인</button>
        ) : (
          <button onClick={this.onLogout}>로그아웃</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
}); //reselect

const mapDispatchToProps = (dispatch) => ({
  dispatchLogIn: (data) => dispatch(login(data)),
  dispatchLogOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
