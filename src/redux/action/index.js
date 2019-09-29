/**
 * ACTION 类型
 */
export const type = {
  SWITCH_CITY: "SWITCH_CITY",
  SWITCH_MENU: "SWITCH_MENU",
  BUTTON_LIST: "BUTTON_LIST",
  SHOW_LOADING: "SHOW_LOADING",
  SIDER_MENU: "SIDER_MENU"
};

/**
 * action function
 * @param {number} cityId  城市id
 */
export function switchCity(cityId) {
  return {
    type: type.SWITCH_CITY,
    cityId
  };
}

/**
 *菜单点击切换 修改面包屑名称
 *
 * @export
 * @param {string} menuName 菜单名称
 */
export function switchMenu(menuName) {
  return {
    type: type.SWITCH_MENU,
    menuName
  };
}

export function showLoading(isLoading) {
  return {
    type: type.SHOW_LOADING,
    isLoading
  };
}

export function switchSiderMenu(collapsed) {
  return {
    type: type.SIDER_MENU,
    collapsed
  };
}
/**
 *保存用户按钮列表
 *
 * @export
 * @param {Array} btnKeys 按钮key
 * @returns
 */
export function saveBtnList(btnKeys) {
  return {
    type: type.BUTTON_LIST,
    btnKeys
  };
}
