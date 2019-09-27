import React from "react";
import { Card, Button, message } from "antd";
export default class Message extends React.Component {
  success = () => {
    message.success("恭喜你，React课程晋级成功.");
  };
  info = () => {
    message.info("恭喜你，React课程晋级成功.");
  };
  warning = () => {
    message.warning("恭喜你，React课程晋级成功.");
  };
  error = () => {
    message.error("恭喜你，React课程晋级成功.");
  };
  loading = () => {
    const hide = message.loading("恭喜你，React课程晋级成功.", 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  };

  showMessage = type => {
    message[type]("恭喜你，React课程晋级成功.");
  };
  render() {
    return (
      <div>
        <Card title="全局提示框">
          {/* <Button type="primary" onClick={this.success}>
            Success
          </Button>
          <Button type="primary" onClick={this.info}>
            Info
          </Button>
          <Button type="primary" onClick={this.warning}>
            Warning
          </Button>
          <Button type="primary" onClick={this.error}>
            Error
          </Button>
          <Button type="primary" onClick={this.loading}>
            Loading
          </Button> */}
          <Button type="primary" onClick={() => this.showMessage("success")}>
            Success
          </Button>
          <Button type="primary" onClick={() => this.showMessage("info")}>
            Info
          </Button>
          <Button type="primary" onClick={() => this.showMessage("warning")}>
            Warning
          </Button>
          <Button type="primary" onClick={() => this.showMessage("error")}>
            Error
          </Button>
          <Button type="primary" onClick={() => this.showMessage("loading")}>
            Loading
          </Button>
        </Card>
      </div>
    );
  }
}
