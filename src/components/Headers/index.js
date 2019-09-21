import React from "react";
import { Row, Col } from "antd";
import Utils from "../../utils/utils";
import axios from "../../axios/index";
import Location from "./../../utils/location";
import "../Headers/index.less";
//3oG5RgnWMwuZWanMkAZLedqRdhRqd3yE

//http://api.map.baidu.com/telematics/v3/weather?location={城市名}&output=json&ak=3oG5RgnWMwuZWanMkAZLedqRdhRqd3yE
export default class Header extends React.Component {
  componentWillMount() {
    this.setState({
      userName: "威廉"
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
            weatherMessage: data.weather
          });
        } else {
          this.setState({
            weatherImage: "",
            weatherMessage: "晴转多云"
          });
        }
      });
  };
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎,{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>

        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-image">
              <img src={this.state.weatherImage} />
            </span>
            <span className="weather-message">{this.state.weatherMessage}</span>
          </Col>
        </Row>
      </div>
    );
  }
}
