import React from "react";
import { Modal } from "antd";

export default class Confirm extends React.Component {
  render() {
    let okText = this.props.okText || "确认";
    let cancelText = this.props.okText || "取消";
    return (
      <div>
        <Modal {...this.props} okText={okText} cancelText={cancelText}>
          {this.props.content}
        </Modal>
      </div>
    );
  }
}
