import React from 'react'
import { Menu, Icon } from 'antd';
import menConfig from '../../config/menConfig';
const { SubMenu } = Menu;
export default class NavLeft extends React.Component {
  componentWillMount() {
    const list = this.renderMenu(menConfig);
    this.setState({ list });
  }
  /**
   * 菜单渲染
   */
  renderMenu = (data) => {

    return data.map((item) => {
      if (item.children) {
        var title = item.icon != null && item.icon != '' ? (<span><Icon type={item.icon} />{item.title}</span>) : (item.title);
        return (
          <SubMenu key={item.key} title={title}>
            {this.renderMenu(item.children)}</SubMenu>
        );
      }

      var iconItem = item.icon != null && item.icon != '' ? (<Menu.Item key={item.key}> <Icon type={item.icon} /> <span>{item.title}</span></Menu.Item>) : (<Menu.Item key={item.key}>{item.title}</Menu.Item>);
      return iconItem;
    });
    // <SubMenu key="sub1" title={<span><Icon type="home" />首页</span>}>   <Menu.Item key="1">Option 1</Menu.Item>
    //   <Menu.Item key="2">Option 2</Menu.Item>
    // </SubMenu>
  }
  render() {
    return (<div>
      <div className="logo">
        <img src="/assets/logo-ant.svg" alt=""></img>
        <h1>Imooc MS</h1>
      </div>
      <Menu theme='dark'>
        {this.state.list}
      </Menu>
    </div>);
  }
}