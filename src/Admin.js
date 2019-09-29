import React from "react";
import { Row, Col } from "antd";
import Header from "./components/Headers/index";
import Footer from "./components/Footers/index";
import NavLeft from "./components/NavLeft/index2";
import Home from "./pages/home/index";
import "./style/common.less";
import { connect } from "react-redux";
import { switchMenu } from "./redux/action";
export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuName: "首页"
    };
  }
  onChildMenuName = name => {
    this.setState({ menuName: name });
  };

  render() {
    return (
      <Row className="container">
        <Col span={3} className="nav-left" style={{ width: "auto" }}>
          <NavLeft />
        </Col>
        <Col span={21} className="main">
          <Header />
          <Row className="content">{this.props.children}</Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}
