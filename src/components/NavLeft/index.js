import React from "react";
import { Menu, Icon } from "antd";
import menuConfig from "../../config/menConfig";
import { NavLink } from "react-router-dom";
import { connect, Provider } from "react-redux";
import "./index.less";
import Store from "./../../utils/Store";
import Utils from "./../../utils/utils";
import { switchMenu, saveBtnList } from "./../../redux/action";
// import logo from "../assets/logo-ant.svg";
const { SubMenu } = Menu;
const keyPath = {};
class NavLeft extends React.Component {
  state = {
    currentKey: "", //当前页面path
    openKeys: [] //打开的菜单keys
  };
  currentName = ""; //当前页面名称
  menuList = []; //当前账号返回的菜单list['/operations/order','/cityManagement/service_area']
  rolePermissionList = []; //根据list 生成完整的菜单结构 可参考limitConfig

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let that = this;
    let menuKeys = [];
    let btnKeys = [];
    //根据结构生成keyList，每个页面需要根据btnKeys来进行按钮权限判断
    that.getLimitKeys(menuConfig, menuKeys, btnKeys);
    // localStorage.setItem("btnKeys",JSON.stringify(btnKeys));
    // 直接将menuConfig当做完整的菜单树
    that.rolePermissionList = menuConfig;

    // 系统管理员直接将车辆详情的按钮权限分配进去
    btnKeys = btnKeys.concat([
      "common/bike/detail-btn1",
      "common/bike/detail-btn2",
      "common/bike/detail-btn3",
      "common/bike/detail-btn4"
    ]);

    const { dispatch } = this.props;
    dispatch(saveBtnList(btnKeys));

    // 由于车辆详情页面上面有很多按钮，无法通过Redux传递过去，只能通过storage
    const bikeBtnKeys = [];
    btnKeys.map(item => {
      if (item.indexOf("common/bike") > -1) {
        bikeBtnKeys.push(item);
      }
    });
    Store.save("bikeBtnKeys", bikeBtnKeys);

    // 初次生成完成的菜单映射表，主要用于菜单打开和关闭
    that.createKeyPath(this.rolePermissionList);

    // 获取当前页面对应的菜单路由Hash值
    let _key = window.location.hash.replace(/#|\?[^\?]*$/g, "");
    // 根据生成的Hash表，判断当前页面是否存在父级
    let _keyPath = keyPath[_key];
    // 默认将当前页面push到打开的openKeys里面，用于菜单默认打开的菜单项
    let nextOpenKeys = [_key];
    // 如果存在父级，则递归遍历
    if (_keyPath) {
      this.loopGetKeyPath(_keyPath[0], nextOpenKeys);
    }
    // 遍历菜单，生成TreeNode对象 ,菜单工厂的入口
    const menuTreeNode = that.renderMenu(that.rolePermissionList);

    // 将最终遍历的openKey保存到state中，Menu组件将根据此openKeys进行设置当前打开的菜单
    that.setState(
      {
        currentKey: _key,
        openKeys: nextOpenKeys || [],
        menuTreeNode: menuTreeNode
      },
      () => {
        this.getBreadcrumb(menuConfig);
      }
    );
  }

  handleClick = (item, key) => {
    if (item.key == this.state.currentKey) {
      return false;
    }
    //事件派发 自动调用reducer 保存到 store 对象中
    const { dispatch } = this.props;
    dispatch(switchMenu(item.item.props.name));

    this.setState({
      currentKey: item.key
    });
  };
  //菜单展开 关闭
  onOpenChange = openKeys => {
    const state = this.state;
    const latestOpenKey = openKeys.find(
      key => !(state.openKeys.indexOf(key) > -1)
    ); //即将被打开的
    const latestCloseKey = state.openKeys.find(
      key => !(openKeys.indexOf(key) > -1)
    ); //即将被关闭的
    let nextOpenKeys = [];
    if (latestOpenKey) {
      //如果这个路径有父级,则把父级路径拼接到前面
      nextOpenKeys = (keyPath[latestOpenKey] || []).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      //关闭时,只留下父级路径
      nextOpenKeys = keyPath[latestCloseKey];
    }
    this.setState({ openKeys: nextOpenKeys || [] });
  };

  // 根据权限配置表，生成完整的映射表，保存到全局的KeyPath中
  createKeyPath = (data, key) => {
    data.map(item => {
      if (item.children) {
        if (key) {
          keyPath[item.key] = [key];
        }
        this.createKeyPath(item.children, item.key);
      } else {
        if (key) {
          keyPath[item.key] = [key];
        }
      }
    });
  };

  // 递归遍历openKeys
  loopGetKeyPath = (key, nextOpenKeys) => {
    // 获取当前key对应的上级菜单
    const _keyPath = keyPath[key];
    if (_keyPath) {
      //存在父级，继续遍历
      nextOpenKeys.push(key);
      this.loopGetKeyPath(_keyPath[0], nextOpenKeys);
    } else {
      if (nextOpenKeys) {
        // 最后一级，直接push进去
        nextOpenKeys.push(key);
      }
    }
  };

  // 生成keyList
  getLimitKeys = (data, menuKeys, btnKeys) => {
    data.forEach(item => {
      if (item.children) {
        this.getLimitKeys(item.children, menuKeys, btnKeys);
      } else {
        menuKeys.push(item.key);
        if (item.btnList && item.btnList.length > 0) {
          item.btnList.forEach((btnItem, index) => {
            btnKeys.push(item.key + "-btn" + index);
          });
        }
      }
    });
  };

  // 生成菜单树结构
  createLimitObject = (data, roleLimitList) => {
    const menuKeys = this.menuList || [];
    data.forEach(item => {
      if (item.children) {
        /**
         * menuKeys是一个数组，只能精确匹配到每一个菜单
         * 比如：menuKeys = ['/maintenance','/maintenance/monitor/monitor_bike-btn0']
         * 通过indexOf搜索/maintenance/monitor 无法搜索出来。
         * 所以还需要通过filterMenuList进行再次循环匹配
         */
        if (menuKeys.indexOf(item.key) > -1 || this.filterMenuList(item.key)) {
          let children = [];
          roleLimitList.push({
            title: item.title,
            key: item.key,
            children: children
          });
          this.createLimitObject(item.children, children);
        }
      } else {
        const btnList = this.filterBtnList(item.key);
        if (btnList && btnList.length > 0) {
          roleLimitList.push({
            title: item.title,
            key: item.key,
            btnList: btnList
          });
        }
      }
    });
  };

  // 菜单匹配
  filterMenuList = key => {
    let flag = false;
    this.menuList.forEach(menu => {
      /**
       * 此处需要判断位置，引起个别菜单名字有重复
       * 比如：/maintenance（运维管理） 和 /statistics/maintenance（换电报表）
       */
      if (menu.indexOf(key) == 0) {
        flag = true;
        return;
      }
    });
    return flag;
  };

  // 按钮匹配
  filterBtnList = key => {
    return this.menuList.filter(btn => {
      if (btn.indexOf(key) > -1 && btn.indexOf(key + "-btn") > -1) {
        return true;
      }
    });
  };
  /**
   * 菜单渲染
   */
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        var title =
          item.icon != null && item.icon != "" ? (
            <span>
              <Icon type={item.icon} />
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
          <Menu.Item
            className="menuItem"
            name={item.title}
            key={item.key}
            title={item.title}
          >
            <Icon type={item.icon} />
            <span>
              <NavLink to={item.key}>{item.title}</NavLink>
            </span>
          </Menu.Item>
        ) : (
          <Menu.Item key={item.key} name={item.title} title={item.title}>
            <NavLink to={item.key}>{item.title}</NavLink>
          </Menu.Item>
        );
      return iconItem;
    });
    // <SubMenu key="sub1" title={<span><Icon type="home" />首页</span>}>   <Menu.Item key="1">Option 1</Menu.Item>
    //   <Menu.Item key="2">Option 2</Menu.Item>
    // </SubMenu>
  };

  // 默认获取当前页面对应的面包屑名称
  getBreadcrumb = data => {
    data.map(item => {
      if (item.children) {
        return this.getBreadcrumb(item.children);
      }
      if (item.key == this.state.currentKey) {
        const { dispatch } = this.props;
        dispatch(switchMenu(item.title));
      }
    });
  };

  // 菜单递归渲染
  // renderMenu = data => {
  //   return data.map(item => {
  //     if (item.children) {
  //       return (
  //         <SubMenu title={item.title} key={item.key}>
  //           {this.renderMenu(item.children)}
  //         </SubMenu>
  //       );
  //     }
  //     return (
  //       <Menu.Item key={item.key} name={item.title}>
  //         <NavLink to={item.key}>{item.title}</NavLink>
  //       </Menu.Item>
  //     );
  //   });
  // };

  homeHandleClick = () => {
    const { dispatch } = this.props;
    dispatch(switchMenu("首页"));
    this.setState({
      openKeys: [],
      currentKey: ""
    });
  };
  render() {
    return (
      <div>
        <NavLink to="/home" onClick={this.homeHandleClick}>
          <div className="logo">
            <img src="./assets/logo-ant.svg" alt="" />
            <h1>Imooc MS</h1>
          </div>
        </NavLink>
        <Menu
          onClick={this.handleClick}
          className="left-nav"
          selectedKeys={[this.state.currentKey]}
          inlineIndent="20"
          theme="dark"
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}
export default connect()(NavLeft);
