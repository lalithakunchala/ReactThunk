import {
    
    FETCH_REGISTER_FAILURE,
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_LOGIN_FAILURE,
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_PROFILE_FAILURE,
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_SUCCESS,
    LOGOUT
  } from "./action";
  
  const initStore = {
    isLoading: false,
    data: [],
    error: "",
    regError:"",
    regSuccess:"",
    logError:"",
    logSuccess:"",
    logUser:"",
    proSuccess:"",
    proError:"",
    profile:""
  };
  
  const reducer = (state = initStore, action) => {
    console.log("reducer called");
    switch (action.type) {
      
        case FETCH_REGISTER_REQUEST:
        console.log("reducer register request called");
        return {
          ...state,
          isLoading: true,
          
        };
        case FETCH_REGISTER_SUCCESS:
        console.log("reducer register request called");
        return {
          ...state,
          regSuccess:action.regSuccess,
          isLoading: false
        };
        case FETCH_REGISTER_FAILURE:
        console.log("reducer register  failure request called");
        return {
          ...state,
          isLoading: false,
          regError: action.error
        };

        case FETCH_LOGIN_REQUEST:
        console.log("reducer login request called");
        return {
          ...state,
          isLoading: true,
          logUser:action.logUser
          
        };
        case FETCH_LOGIN_SUCCESS:
        console.log("reducer login request called");
        return {
          ...state,
          logSuccess:action.logSuccess,
          isLoading: false
        };

        case FETCH_LOGIN_FAILURE:
        console.log("reducer login  failure request called");
        return {
          ...state,
          isLoading: false,
          logError: action.logError
        };
        case FETCH_PROFILE_REQUEST:
        console.log("reducer login request called");
        return {
          ...state,
          isLoading: true,
          logUser:action.logUser
          
        };
        case FETCH_PROFILE_SUCCESS:
        console.log("reducer login request called");
        return {
          ...state,
          proSuccess:action.proSuccess,
          isLoading: false
        };
        case FETCH_PROFILE_FAILURE:
        console.log("reducer login  failure request called");
        return {
          ...state,
          isLoading: false,
          proError: action.proError
        };

        case LOGOUT:
          console.log("logout");
          return{
            ...state,
            logSuccess:"",
          }

      default:
        console.log("reducer default called");
        return state;
    }
  };
  
  export default reducer;