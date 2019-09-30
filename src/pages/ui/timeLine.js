import React from "react";
import { Card, Timeline, Button, Icon } from "antd";

export default class TimeLine extends React.Component {
  state = {
    reverse: false
  };
  handleClick = () => {
    this.setState({ reverse: !this.state.reverse });
  };
  render() {
    return (
      <div>
        <Card title="时间轴-Basic">
          <Timeline style={{ marginLeft: 20 }}>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Network problems being solved 2015-09-01
            </Timeline.Item>
          </Timeline>
        </Card>

        <Card title="时间轴-加载及排序" style={{ marginTop: 10 }}>
          <Timeline
            style={{ marginLeft: 20 }}
            pending="Recording..."
            reverse={this.state.reverse}
          >
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          </Timeline>
          <Button
            type="primary"
            style={{ marginTop: 16 }}
            onClick={this.handleClick}
          >
            Toggle Reverse
          </Button>
        </Card>

        <Card title="时间轴-自动以事件轴点" style={{ marginTop: 10 }}>
          <Timeline style={{ marginLeft: 20 }}>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item
              dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
              color="red"
            >
              Technical testing 2015-09-01
            </Timeline.Item>
            <Timeline.Item>
              Network problems being solved 2015-09-01
            </Timeline.Item>
          </Timeline>
        </Card>

        <Card title="时间轴-圆圈颜色" style={{ marginTop: 10 }}>
          <Timeline style={{ marginLeft: 20 }}>
            <Timeline.Item color="green">
              Create a services site 2015-09-01
            </Timeline.Item>
            <Timeline.Item color="green">
              Create a services site 2015-09-01
            </Timeline.Item>
            <Timeline.Item color="red">
              <p>Solve initial network problems 1</p>
              <p>Solve initial network problems 2</p>
              <p>Solve initial network problems 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item>
              <p>Technical testing 1</p>
              <p>Technical testing 2</p>
              <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item color="gray">
              <p>Technical testing 1</p>
              <p>Technical testing 2</p>
              <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item color="gray">
              <p>Technical testing 1</p>
              <p>Technical testing 2</p>
              <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
          </Timeline>
        </Card>

        <Card title="时间轴-交替" style={{ marginTop: 10 }}>
          <Timeline style={{ marginLeft: 20 }} mode="alternate">
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item
              dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Timeline.Item>
            <Timeline.Item color="red">
              Network problems being solved 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item
              dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
            >
              Technical testing 2015-09-01
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    );
  }
}
