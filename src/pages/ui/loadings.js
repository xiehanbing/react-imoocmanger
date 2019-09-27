import React from "react";
import { Card, Spin, Icon, Switch, Alert } from "antd";
import "./ui.less";

export default class Modals extends React.Component {
  state = { loading1: false, loading2: true, loading3: true, loading4: true };

  render() {
    const style = {
      margin: "0px 20px"
    };
    const style2 = {
      marginTop: "10px"
    };
    const { loading1, loading2, loading3, loading4 } = this.state;
    return (
      <div>
        <Card title="Spin用法" className="card-wrap">
          <Spin size="small"></Spin>
          <Spin style={style}></Spin>
          <Spin size="large"></Spin>

          <Spin
            indicator={
              <Icon
                type="loading"
                style={{ fontSize: 24, margin: "0px 20px" }}
                spin
              />
            }
          ></Spin>
        </Card>

        <Card title="内容遮罩" className="card-wrap">
          <Spin spinning={loading1}>
            <Alert
              message="React"
              description="欢迎来到DRAMA react 设计的后台系统"
              type="info"
            ></Alert>
          </Spin>
          <Spin>
            <Alert
              style={style2}
              message="React"
              description="欢迎来到DRAMA react 设计的后台系统"
              type="info"
            ></Alert>
          </Spin>

          <Spin tip="加载中">
            <Alert
              style={style2}
              message="React"
              description="欢迎来到DRAMA react 设计的后台系统"
              type="info"
            ></Alert>
          </Spin>

          <Spin
            indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}
          >
            <Alert
              style={style2}
              message="React"
              description="欢迎来到DRAMA react 设计的后台系统"
              type="info"
            ></Alert>
          </Spin>
        </Card>
      </div>
    );
  }
}
