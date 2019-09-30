import React from "react";
import { Menu, Icon, Layout } from "antd";
// import { Icon, Layout } from "antd";
import menuConfig from "../../config/menConfig";
import { NavLink } from "react-router-dom";
import { connect, Provider } from "react-redux";
import "./index.less";
import Store from "./../../utils/Store";
import Utils from "./../../utils/utils";
import { switchMenu, saveBtnList } from "./../../redux/action";
// import logo from "../assets/logo-ant.svg";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const keyPath = {};
const imoocLogoSvg = () => (
  <svg width="2em" height="2em" viewBox="10 0 200 200" version="1.1">
    <title>Group 28 Copy 5</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <linearGradient
        x1="62.1023273%"
        y1="0%"
        x2="108.19718%"
        y2="37.8635764%"
        id="linearGradient-1"
      >
        <stop stop-color="#4285EB" offset="0%"></stop>
        <stop stop-color="#2EC7FF" offset="100%"></stop>
      </linearGradient>
      <linearGradient
        x1="69.644116%"
        y1="0%"
        x2="54.0428975%"
        y2="108.456714%"
        id="linearGradient-2"
      >
        <stop stop-color="#29CDFF" offset="0%"></stop>
        <stop stop-color="#148EFF" offset="37.8600687%"></stop>
        <stop stop-color="#0A60FF" offset="100%"></stop>
      </linearGradient>
      <linearGradient
        x1="69.6908165%"
        y1="-12.9743587%"
        x2="16.7228981%"
        y2="117.391248%"
        id="linearGradient-3"
      >
        <stop stop-color="#FA816E" offset="0%"></stop>
        <stop stop-color="#F74A5C" offset="41.472606%"></stop>
        <stop stop-color="#F51D2C" offset="100%"></stop>
      </linearGradient>
      <linearGradient
        x1="68.1279872%"
        y1="-35.6905737%"
        x2="30.4400914%"
        y2="114.942679%"
        id="linearGradient-4"
      >
        <stop stop-color="#FA8E7D" offset="0%"></stop>
        <stop stop-color="#F74A5C" offset="51.2635191%"></stop>
        <stop stop-color="#F51D2C" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="logo" transform="translate(-20.000000, -20.000000)">
        <g id="Group-28-Copy-5" transform="translate(20.000000, 20.000000)">
          <g id="Group-27-Copy-3">
            <g id="Group-25" fill-rule="nonzero">
              <g id="2">
                <path
                  d="M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C99.2571609,26.9692191 101.032305,26.9692191 102.20193,28.1378823 L129.985225,55.8983314 C134.193707,60.1033528 141.017005,60.1033528 145.225487,55.8983314 C149.433969,51.69331 149.433969,44.8756232 145.225487,40.6706018 L108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z"
                  id="Shape"
                  fill="url(#linearGradient-1)"
                ></path>
                <path
                  d="M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C100.999864,25.6271836 105.751642,20.541824 112.729652,19.3524487 C117.915585,18.4685261 123.585219,20.4140239 129.738554,25.1889424 C125.624663,21.0784292 118.571995,14.0340304 108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z"
                  id="Shape"
                  fill="url(#linearGradient-2)"
                ></path>
              </g>
              <path
                d="M153.685633,135.854579 C157.894115,140.0596 164.717412,140.0596 168.925894,135.854579 L195.959977,108.842726 C200.659183,104.147384 200.659183,96.5636133 195.960527,91.8688194 L168.690777,64.7181159 C164.472332,60.5180858 157.646868,60.5241425 153.435895,64.7316526 C149.227413,68.936674 149.227413,75.7543607 153.435895,79.9593821 L171.854035,98.3623765 C173.02366,99.5310396 173.02366,101.304724 171.854035,102.473387 L153.685633,120.626849 C149.47715,124.83187 149.47715,131.649557 153.685633,135.854579 Z"
                id="Shape"
                fill="url(#linearGradient-3)"
              ></path>
            </g>
            <ellipse
              id="Combined-Shape"
              fill="url(#linearGradient-4)"
              cx="100.519339"
              cy="100.436681"
              rx="23.6001926"
              ry="23.580786"
            ></ellipse>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
const ImoocIcon = props => <Icon component={imoocLogoSvg} {...props} />;
class NavLeft extends React.Component {
  state = {
    currentKey: "", //当前页面path
    openKeys: [], //打开的菜单keys
    collapsed: false
  };

  currentName = ""; //当前页面名称
  menuList = []; //当前账号返回的菜单list['/operations/order','/cityManagement/service_area']
  rolePermissionList = []; //根据list 生成完整的菜单结构 可参考limitConfig

  constructor(props) {
    super(props);
    // console.log("props collapsed:" + props["collapsed"]);
    // var propsCollapsed = props["collapsed"];
    // if (propsCollapsed != null) {
    //   this.state.collapsed = propsCollapsed;
    // }
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

    // var propsCollapsed = this.props.collapsed;
    // if (propsCollapsed != null) {
    //   this.setState({
    //     collapsed: propsCollapsed
    //   });
    // }
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
  onCollapse = collapsed => {
    // this.props["collapsed"] == null;
    this.setState({
      collapsed
    });
  };
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
              <span>{item.title}</span>
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
            <NavLink to={item.key}>
              <Icon type={item.icon} />

              <span>{item.title}</span>
            </NavLink>
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
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            width="calc(25vh)"
            // collapsedWidth="50px"
          >
            <Menu
              style={{ display: "", height: "70px", borderRight: "0px" }}
              className="logoMenu"
            >
              {" "}
              <Menu.Item className="logo" name="logo" key="logo">
                <ImoocIcon />
                <span>
                  <h1>Imooc MS</h1>
                </span>
              </Menu.Item>
              {/* <NavLink to="/home" onClick={this.homeHandleClick}>
                <div className="logo">
                  <img src="./assets/logo-ant.svg" alt="" />
                  <h1>Imooc MS</h1>
                </div>
              </NavLink> */}
            </Menu>

            <Menu
              onClick={this.handleClick}
              className="left-nav"
              selectedKeys={[this.state.currentKey]}
              inlineIndent="20"
              theme="dark"
              mode="inline"
              style={{ marginTop: "30px" }}
            >
              {this.state.menuTreeNode}
            </Menu>
          </Sider>
        </Layout>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     collapsed: state.collapsed
//   };
// };
// export default connect(mapStateToProps)(NavLeft);
export default connect()(NavLeft);
