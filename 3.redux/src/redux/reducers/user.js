const initialState = {
  isLoggingIn: false,
  data: null,
};

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...prevState,
        isLoggingIn: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...prevState,
        data: action.data,
        isLoggingIn: false,
      };
    case LOG_IN_FAILURE:
      return {
        ...prevState,
        data: null,
        isLoggingIn: false,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        data: null,
      };

    default:
      return { ...prevState };
  }
};

module.exports = userReducer;
