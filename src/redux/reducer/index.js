import { combineReducers } from "redux";

import { type } from "./../action/index";
/**
 * 初始化 state
 */
const initialState = {
  cityId: "",
  menuName: "",
  isLoading: false,
  collapsed: false
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
    case type.SHOW_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case type.SIDER_MENU:
      return {
        ...state,
        collapsed: action.collapsed
      };
    default:
      return { ...state };
  }
};

export default ebikeData;
