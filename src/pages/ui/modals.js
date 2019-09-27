import React from "react";
import { Card, Button, Icon, Radio, Modal } from "antd";
import "./ui.less";

const { confirm } = Modal;
export default class Modals extends React.Component {
  state = {
    visible: false,
    visible2: false,
    visible3: false,
    visible4: false,
    loading: false
  };
  componentWillMount() {}
  /**
   *确定按钮事件
   *
   * @memberof Modals
   */
  handleOk = e => {
    this.setState({
      visible: false
    });
  };
  handleOk2 = e => {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        visible2: false,
        loading: false
      });
    }, 3000);
  };
  handleOk3 = e => {
    this.setState({
      visible3: false
    });
  };
  handleOk4 = e => {
    this.setState({
      visible4: false
    });
  };
  /**
   *取消按钮事件
   *
   * @memberof Modals
   */
  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  handleCancel2 = e => {
    this.setState({
      visible2: false
    });
  };
  handleCancel3 = e => {
    this.setState({
      visible3: false
    });
  };
  handleCancel4 = e => {
    this.setState({
      visible4: false
    });
  };
  /**
   *显示弹框
   *
   * @memberof Modals
   */
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  showModal2 = () => {
    this.setState({
      visible2: true
    });
  };
  showModal3 = () => {
    this.setState({
      visible3: true
    });
  };
  showModal4 = () => {
    this.setState({
      visible4: true
    });
  };

  //信息确认框方法
  showConfirm = () => {
    confirm({
      title: "确认?",
      content: "确认学会React了吗?",
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {}
    });
  };
  showInfo = () => {
    Modal.info({
      title: "确认？",
      content: (
        <div>
          <p>你确认学会了React了吗?</p>
        </div>
      ),
      onOk() {}
    });
  };
  showSuccess = () => {
    Modal.success({
      title: "确认？",
      content: (
        <div>
          <p>你确认学会了React了吗?</p>
        </div>
      )
    });
  };

  showError = () => {
    Modal.error({
      title: "确认？",
      content: (
        <div>
          <p>你确认学会了React了吗?</p>
        </div>
      )
    });
  };
  showWarning = () => {
    Modal.warning({
      title: "确认？",
      content: (
        <div>
          <p>你确认学会了React了吗?</p>
        </div>
      )
    });
  };

  render() {
    const { visible2, visible3, visible4, loading } = this.state;
    return (
      <div>
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={this.showModal}>
            Open
          </Button>
          <Modal
            title="React"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>欢迎来到DRAMA react 设计的后台系统</p>
          </Modal>
          <Button type="primary" onClick={this.showModal2}>
            自定义页脚
          </Button>
          <Modal
            title="React"
            visible={visible2}
            onOk={this.handleOk2}
            onCancel={this.handleCancel2}
            footer={[
              <Button key="back" onClick={this.handleCancel2}>
                算了
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={loading}
                onClick={this.handleOk2}
              >
                好的
              </Button>
            ]}
          >
            <p>欢迎来到DRAMA react 设计的后台系统</p>
          </Modal>

          <Button type="primary" onClick={this.showModal3}>
            顶部20px弹框
          </Button>
          <Modal
            title="React"
            visible={visible3}
            onOk={this.handleOk3}
            onCancel={this.handleCancel3}
            style={{ top: 20 }}
          >
            <p>欢迎来到DRAMA react 设计的后台系统</p>
          </Modal>

          <Button type="primary" onClick={this.showModal4}>
            水平垂直居中
          </Button>
          <Modal
            title="React"
            visible={visible4}
            onOk={this.handleOk4}
            onCancel={this.handleCancel4}
            centered
          >
            <p>欢迎来到DRAMA react 设计的后台系统</p>
          </Modal>
        </Card>

        <Card title="信息确认框" className="card-wrap">
          <Button type="primary" onClick={this.showConfirm}>
            Confirm
          </Button>

          <Button type="primary" onClick={this.showInfo}>
            Info
          </Button>

          <Button type="primary" onClick={this.showSuccess}>
            Success
          </Button>

          <Button type="primary" onClick={this.showError}>
            Error
          </Button>

          <Button type="primary" onClick={this.showWarning}>
            Warning
          </Button>
        </Card>
      </div>
    );
  }
}
