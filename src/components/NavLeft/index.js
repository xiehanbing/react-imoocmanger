import React from "react";
import { Menu, Icon } from "antd";
import menConfig from "../../config/menConfig";
import { NavLink } from "react-router-dom";
import "./index.less";
// import logo from "../assets/logo-ant.svg";
const { SubMenu } = Menu;
export default class NavLeft extends React.Component {
  componentWillMount() {
    const list = this.renderMenu(menConfig);
    this.setState({ list });
  }
  /**
   * 菜单渲染
   */
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        var title =
          item.icon != null && item.icon != "" ? (
            <span>
              {/* <Icon type={item.icon} /> */}
              {item.title}
            </span>
          ) : (
            item.title
          );
        return (
          <SubMenu key={item.key} title={title}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }

      var iconItem =
        item.icon != null && item.icon != "" ? (
          <Menu.Item className="menuItem" key={item.key} title={item.title}>
            {/* <Icon type={item.icon} /> */}
            {/* <span> */}
            <NavLink to={item.key}>{item.title}</NavLink>
            {/* </span> */}
          </Menu.Item>
        ) : (
          <Menu.Item key={item.key} title={item.title}>
            <NavLink to={item.key}>{item.title}</NavLink>
          </Menu.Item>
        );
      return iconItem;
    });
    // <SubMenu key="sub1" title={<span><Icon type="home" />首页</span>}>   <Menu.Item key="1">Option 1</Menu.Item>
    //   <Menu.Item key="2">Option 2</Menu.Item>
    // </SubMenu>
  };
  render() {
    return (
      <div>
        <div className="logo">
          <img src="../assets/logo-ant.svg" alt=""></img>
          <h1>Imooc MS</h1>
        </div>
        <Menu theme="dark">{this.state.list}</Menu>
      </div>
    );
  }
}
