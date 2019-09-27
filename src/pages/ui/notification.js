import React from "react";
import { Button, notification, Card } from "antd";

import "./ui.less";
export default class Notification extends React.Component {
  openNotificationWithIcon = type => {
    notification[type]({
      message: "发工资了",
      description: "上月考勤22天， 迟到12天，实发工资250，请笑纳"
    });
  };

  openNotification = (type, place) => {
    notification[type]({
      placement: place,
      message: "发工资了",
      description: "上月考勤22天， 迟到12天，实发工资250，请笑纳"
    });
  };

  render() {
    return (
      <div>
        <Card title="通知提醒框" className="card-wrap">
          <Button
            type="primary"
            onClick={() => this.openNotificationWithIcon("success")}
          >
            Success
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotificationWithIcon("info")}
          >
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotificationWithIcon("warning")}
          >
            Warning
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotificationWithIcon("error")}
          >
            Error
          </Button>
        </Card>

        <Card title="通知提醒框-方向控制" className="card-wrap">
          <Button
            type="primary"
            onClick={() => this.openNotification("success", "topLeft")}
          >
            Success-TopLeft
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("info", "topRight")}
          >
            Info-TopRight
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("warning", "bottomLeft")}
          >
            Warning-BottomLeft
          </Button>
          <Button
            type="danger"
            onClick={() => this.openNotification("error", "bottomRight")}
          >
            Error-BottomRight
          </Button>
        </Card>
      </div>
    );
  }
}
