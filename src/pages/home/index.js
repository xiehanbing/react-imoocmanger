import React from "react";
import { Col, Card, Row, Statistic } from "antd";
import "./index.less";
const { Countdown } = Statistic;
export default class Home extends React.Component {
  onFinish = () => {
    console.log("finished!");
  };
  render() {
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
    return (
      <div className="home-content">
        <div className="home-wrap">欢迎 威廉</div>
        {/* <div className="static-content">
          <Card>
            <Row gutter={16} align="middle">
              <Col span={12}>
                <Countdown
                  title="Countdown"
                  value={deadline}
                  onFinish={this.onFinish}
                />
              </Col>
              <Col span={12}>
                <Countdown
                  title="Million Seconds"
                  value={deadline}
                  format="HH:mm:ss:SSS"
                />
              </Col>
              <Col span={24} style={{ marginTop: 32 }}>
                <Countdown
                  title="Day Level"
                  value={deadline}
                  format="D 天 H 时 m 分 s 秒"
                />
              </Col>
            </Row>
          </Card>
        </div> */}
      </div>
    );
  }
}
