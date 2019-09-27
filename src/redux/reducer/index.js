import { combineReducers } from "redux";

import { type } from "./../action/index";
/**
 * 初始化 state
 */
const initialState = {
  cityId: "",
  menuName: ""
};

const ebikeData = (state = initialState, action) => {
  switch (action.type) {
    case type.SWITCH_CITY:
      return {
        ...state,
        cityId: action.cityId
      };
    case type.SWITCH_MENU:
      return {
        ...state,
        menuName: action.menuName
      };
    case type.BUTTON_LIST:
      return {
        ...state,
        btnKeys: action.btnKeys
      };
    default:
      return { ...state };
  }
};

export default ebikeData;
