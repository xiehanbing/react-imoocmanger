import React from "react";
import { Row, Col, Form, Select, Icon } from "antd";
import Utils from "../../utils/utils";
import axios from "../../axios/index";
import Location from "./../../utils/location";
import "../Headers/index.less";
import Store from "../../utils/Store";
import { connect } from "react-redux";
import { switchSiderMenu } from "../../redux/action";
const FormItem = Form.Item;
//3oG5RgnWMwuZWanMkAZLedqRdhRqd3yE

//http://api.map.baidu.com/telematics/v3/weather?location={城市名}&output=json&ak=3oG5RgnWMwuZWanMkAZLedqRdhRqd3yE
class Header extends React.Component {
  state = {
    dayPictureUrl: "",
    weather: "",
    collapsed: false
  };
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    Store.save("userName", "威廉");
    this.setState({
      userName: Store.fetch("userName")
    });
    this.setState({
      weatherImage: "",
      weatherMessage: "晴转多云"
    });

    setInterval(() => {
      var sysTime = Utils.formateDate(new Date().getTime());
      this.setState({
        sysTime
      });
    }, 1000);
    var location = Location.getLocation();
    console.log(location);
    this.getWeatherApiData("杭州市");
  }
  /**
   *获取天气数据
   *传入城市
   * @memberof Header
   */
  getWeatherApiData = cityName => {
    let protocol = window.location.protocol;
    axios
      .jsonp({
        url:
          protocol +
          "//api.map.baidu.com/telematics/v3/weather?location=" +
          encodeURIComponent(cityName) +
          "&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
      })
      .then(res => {
        console.log(res);
        if (res.status == "success") {
          let data = res.results[0].weather_data[0];
          this.setState({
            weatherImage: data.dayPictureUrl,
            imageAlt: data.date,
            weatherMessage: data.weather,
            temperature: data.temperature
          });
        } else {
          this.setState({
            weatherImage: "",
            weatherMessage: "晴转多云"
          });
        }
      });
  };
  handleToggle = item => {
    // if (item.key == this.state.currentKey) {
    //   return false;
    // }
    //事件派发 自动调用reducer 保存到 store 对象中
    const { dispatch } = this.props;
    dispatch(switchSiderMenu(!this.state.collapsed));
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={2} style={{ textAlign: "left" }}>
            {/* <Header style={{ background: "#fff", padding: 0 }}> */}
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.handleToggle}
            />
            {/* </Header> */}
          </Col>
          <Col span={22}>
            <span>欢迎,{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>

        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            {/* {this.props.currentMenu} */}
            {/* 首页 */}
            {this.props.menuName || "首页"}
          </Col>
          <Col className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-image">
              <img
                src={this.state.weatherImage}
                alt={this.state.imageAlt}
                title={this.state.imageAlt}
              />
            </span>
            <span className="weather-message">{this.state.weatherMessage}</span>
            <span className="weather-message temperature">
              {this.state.temperature}
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuName: state.menuName
  };
};
export default connect(mapStateToProps)(Header);
