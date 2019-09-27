import React from "react";
import { Card, Button, Icon, Radio } from "antd";
import "./ui.less";
export default class Buttons extends React.Component {
  componentWillMount() {
    this.setState({
      loading: true,
      closeMessage: "关闭",
      ratioValue: "default",
      size: "default"
    });
  }
  handleCloseLoading = () => {
    var isClose = this.state.loading;

    this.setState({ loading: !isClose, closeMessage: "开启" });
  };

  onChange = e => {
    this.setState({ ratioValue: e.target.value, size: e.target.value });
  };
  render() {
    return (
      <div>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">Imooc</Button>
          <Button>Imooc</Button>
          <Button type="dashed">Imooc</Button>
          <Button type="danger">Imooc</Button>
          <Button disabled>Imooc</Button>
        </Card>

        <Card title="图形按钮" className="card-wrap">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">
            搜索
          </Button>
          <Button icon="download" type="primary">
            下载
          </Button>
        </Card>

        <Card title="Loading按钮" className="card-wrap">
          <Button type="primary" loading={this.state.loading}>
            确定
          </Button>
          <Button
            type="primary"
            shape="circle"
            loading={this.state.loading}
          ></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>
            {this.state.closeMessage}
          </Button>
        </Card>

        <Card title="按钮组" className="card-wrap">
          <Button type="primary">
            <Icon type="left" />
            返回
          </Button>
          <Button type="primary">
            前进
            <Icon type="right" />
          </Button>
        </Card>

        <Card title="按钮尺寸" className="card-wrap">
          <Radio.Group onChange={this.onChange} value={this.state.ratioValue}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>

          <Button type="primary" size={this.state.size}>
            Imooc
          </Button>
          <Button size={this.state.size}>Imooc</Button>
          <Button type="dashed" size={this.state.size}>
            Imooc
          </Button>
          <Button type="danger" size={this.state.size}>
            Imooc
          </Button>
          <Button disabled size={this.state.size}>
            Imooc
          </Button>
        </Card>
      </div>
    );
  }
}
