import React from "react";
import { Card, Progress, Button, Tooltip } from "antd";
const ButtonGroup = Button.Group;
export default class ProgressIndex extends React.Component {
  state = {
    percent: 0
  };

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };
  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };
  render() {
    return (
      <div>
        <Card title="进度条-Basic">
          <div style={{ marginLeft: 20 }}>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
          </div>
        </Card>
        <Card title="进度条-小型" style={{ marginTop: 10 }}>
          <div style={{ marginLeft: 20, width: 300 }}>
            <Progress percent={30} size="small" />
            <Progress percent={50} size="small" status="active" />
            <Progress percent={70} size="small" status="exception" />
            <Progress percent={100} size="small" />
          </div>
        </Card>

        <Card title="进度圈" style={{ marginTop: 10 }}>
          <div style={{ marginLeft: 20 }}>
            <Progress type="circle" percent={this.state.percent} />
            <ButtonGroup style={{ marginLeft: 10 }}>
              <Button onClick={this.decline} icon="minus" />
              <Button onClick={this.increase} icon="plus" />
            </ButtonGroup>
          </div>
        </Card>

        <Card title="进度圈-自定义文字格式" style={{ marginTop: 10 }}>
          <div style={{ marginLeft: 20 }}>
            <Progress
              type="circle"
              percent={75}
              format={percent => `${percent} Days`}
            />
            <Progress type="circle" percent={100} format={() => "Done"} />
          </div>
        </Card>

        <Card title="分段进度条" style={{ marginTop: 10 }}>
          <div style={{ marginLeft: 20 }}>
            <Tooltip title="3 done / 3 in progress / 4 to do">
              <Progress percent={60} successPercent={30} />
            </Tooltip>

            <Tooltip title="3 done / 3 in progress / 4 to do">
              <Progress percent={60} successPercent={30} type="circle" />
            </Tooltip>

            <Tooltip title="3 done / 3 in progress / 4 to do">
              <Progress percent={60} successPercent={30} type="dashboard" />
            </Tooltip>
          </div>
        </Card>

        <Card title="自定义进度条渐变色" style={{ marginTop: 10 }}>
          <div style={{ marginLeft: 20 }}>
            <Progress
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068"
              }}
              percent={99.9}
            />
            <Progress
              strokeColor={{
                from: "#108ee9",
                to: "#87d068"
              }}
              percent={99.9}
              status="active"
            />
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068"
              }}
              percent={90}
            />
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068"
              }}
              percent={100}
            />
          </div>
        </Card>
      </div>
    );
  }
}
