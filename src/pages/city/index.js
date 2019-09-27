import React from "react";
import Divider, {
  Card,
  Button,
  Table,
  Form,
  Input,
  Select,
  Checkbox,
  Radio,
  Icon,
  Modal,
  message
} from "antd";
import axios from "./../../axios/index";
import Utils from "./../../utils/utils";
import "./index.less";
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

export default class City extends React.Component {
  state = {
    list: [],
    isShowOpenCity: false
  };

  params = {
    page: 1
  };

  requestList = () => {
    let _this = this;
    axios
      .ajax({
        url: "/city/list.json",
        data: {
          params: {
            page: this.params.page
          }
        }
      })
      .then(res => {
        this.setState({
          list: res.result.item_list.map((item, index) => {
            item.key = index;
            return item;
          }),
          pagination: Utils.pagination(res, current => {
            _this.params.page = current;
            _this.requestList();
          })
        });
      });
  };

  componentDidMount() {
    this.requestList();
  }

  //查询提交
  filterSubmit = () => {
    this.requestList();
  };

  // 开通城市
  handleOpenCity = () => {
    this.setState({
      isShowOpenCity: true
    });
  };

  handleSubmit = () => {
    let cityInfo = this.cityForm.props.form.getFieldsValue();
    axios
      .ajax({
        url: "/city/open",
        data: {
          params: cityInfo
        }
      })
      .then(res => {
        if (res.code == 0) {
          message.success("开通成功");
          this.setState({
            isShowOpenCity: false
          });
          this.requestList();
        }
      });
  };

  // 关闭弹窗
  hideOpenCity = () => {
    this.setState({
      isShowOpenCity: false
    });
  };

  render() {
    const columns = [
      {
        title: "城市Id",
        dataIndex: "id"
      },
      {
        title: "城市名称",
        dataIndex: "name"
      },
      {
        title: "用车模式",
        dataIndex: "mode",
        render(mode) {
          return mode == 1 ? "停车点" : "禁停区";
        }
      },
      {
        title: "营运模式",
        dataIndex: "op_mode",
        render(mode) {
          return mode == 1 ? "自营" : "加盟";
        }
      },
      {
        title: "授权加盟商",
        dataIndex: "franchisee_name",
        render(text) {
          return text ? text : "-";
        }
      },
      {
        title: "城市管理员",
        dataIndex: "city_admins",
        render(city_admins) {
          let userList = [];
          city_admins.map(item => {
            userList.push(item.user_name);
          });
          return userList.join(",");
        }
      },
      {
        title: "城市开通时间",
        dataIndex: "open_time"
      },
      {
        title: "操作时间",
        dataIndex: "update_time",
        render: Utils.formatTime
      },
      {
        title: "操作人",
        dataIndex: "sys_user_name"
      }
    ];
    return (
      <div>
        <Card>
          <FilterForm filterSubmit={this.filterSubmit} />
        </Card>
        <Card style={{ marginTop: 10 }}>
          <Button type="primary" onClick={this.handleOpenCity}>
            开通城市
          </Button>
        </Card>
        <div className="content-wrap">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
          />
        </div>
        <Modal
          title="开通城市"
          visible={this.state.isShowOpenCity}
          onCancel={this.hideOpenCity}
          onOk={this.handleSubmit}
        >
          <OpenCityForm
            wrappedComponentRef={inst => {
              this.cityForm = inst;
            }}
          ></OpenCityForm>
        </Modal>
      </div>
    );
  }
}

class FilterForm extends React.Component {
  state = {};

  handleFilterSubmit = () => {
    this.props.filterSubmit();
  };

  reset = () => {
    this.props.form.resetFields();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <div>
          <FormItem label="城市：">
            {getFieldDecorator("city_id")(
              <Select style={{ width: 90 }} placeholder="全部">
                <Option value="">全部</Option>
                <Option value="1">北京市</Option>
                <Option value="2">天津市</Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="用车模式：">
            {getFieldDecorator("mode")(
              <Select style={{ width: 140 }} placeholder="全部">
                <Option value="">全部</Option>
                <Option value="1">指定停车点模式</Option>
                <Option value="2">禁停区模式</Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="营运模式：">
            {getFieldDecorator("op_mode")(
              <Select style={{ width: 80 }} placeholder="全部">
                <Option value="">全部</Option>
                <Option value="1">自营</Option>
                <Option value="2">加盟</Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="加盟商授权状态：">
            {getFieldDecorator("auth_status")(
              <Select style={{ width: 90 }} placeholder="全部">
                <Option value="">全部</Option>
                <Option value="1">已授权</Option>
                <Option value="2">未授权</Option>
              </Select>
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              style={{ marginLeft: 20 }}
              onClick={this.handleFilterSubmit}
            >
              查询
            </Button>
            <Button type="ghost" onClick={this.reset}>
              重置
            </Button>
          </FormItem>
        </div>
      </Form>
    );
  }
}
FilterForm = Form.create({})(FilterForm);

class OpenCityForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    };
    return (
      <Form layout="horizontal">
        <FormItem label="选择城市" {...formItemLayout}>
          {getFieldDecorator("city_id", {
            initialValue: "1"
          })(
            <Select style={{ width: 90 }} placeholder="全部">
              <Option value="">全部</Option>
              <Option value="1">北京市</Option>
              <Option value="2">天津市</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="营运模式" {...formItemLayout}>
          {getFieldDecorator("op_mode", {
            initialValue: "1"
          })(
            <RadioGroup>
              <Radio value="1">自营</Radio>
              <Radio value="2">加盟</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem label="用车模式" {...formItemLayout}>
          {getFieldDecorator("mode", {
            initialValue: "1"
          })(
            <RadioGroup>
              <Radio value="1">指定停车点模式</Radio>
              <Radio value="2">禁停区模式</Radio>
            </RadioGroup>
          )}
        </FormItem>
      </Form>
    );
  }
}
OpenCityForm = Form.create({})(OpenCityForm);
