import React from "react";
import {
  Card,
  Modal,
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Radio
} from "antd";
import BaseForm from "./../../components/BaseForm/index";
import UserColumn from "./index-columns";
import ETable from "./../../components/ETable/index";
import axios from "../../axios/index";
import Utils from "../../utils/utils";
import Moment from "moment";
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
export default class User extends React.Component {
  state = {
    list: []
  };
  formList = [
    {
      type: "INPUT",
      label: "用户名",
      field: "user_name",
      placeholder: "请输入用户名",
      width: 100
    }
  ];
  params = {
    page: 1
  };
  componentDidMount() {
    this.requestList();
  }
  handleFilterSubmit = filterParams => {
    this.params = filterParams;
    this.requestList();
  };
  // 列表请求
  requestList = () => {
    let _this = this;
    axios
      .ajax({
        url: "/json/user/list.json",
        data: {
          params: this.params
        }
      })
      .then(res => {
        if (res) {
          _this.setState({
            list: res.result.list.map((item, index) => {
              item.key = index;
              return item;
            }),
            pagination: Utils.pagination(res, current => {
              _this.params.page = current;
              _this.requestList();
            })
          });
        }
      });
  };

  handleSubmit = () => {
    let type = this.state.type;
    let data = this.userForm.props.form.getFieldsValue();
    axios
      .ajax({
        url: type == "create" ? "/user/add" : "/user/edit",
        data: {
          params: {
            ...data
          }
        }
      })
      .then(res => {
        if (res.code == 0) {
          this.setState({
            isVisible: false
          });
          this.requestList();
        }
      });
  };

  // 操作员工
  handleOperator = type => {
    let item = this.state.selectedItem;
    if (type == "create") {
      this.setState({
        title: "创建员工",
        isVisible: true,
        type
      });
    } else if (type == "edit" || type == "detail") {
      if (!item) {
        Modal.info({
          title: "信息",
          content: "请选择一个用户"
        });
        return;
      }
      this.setState({
        title: type == "edit" ? "编辑用户" : "查看详情",
        isVisible: true,
        userInfo: item,
        type
      });
    } else if (type == "delete") {
      if (!item) {
        Modal.info({
          title: "信息",
          content: "请选择一个用户"
        });
        return;
      }
      Utils.confirm({
        title: "是否删除",
        text: "确定要删除此用户吗？",
        visible: this.state.isVisible,
        onOk: () => {
          this.setState({
            isVisible: false
          });
          Utils.messageSuccess("删除成功");
          //   axios
          //     .ajax({
          //       url: "/user/delete",
          //       data: {
          //         params: {
          //           id: item.id
          //         }
          //       }
          //     })
          //     .then(res => {
          //       if (res.code == 0) {
          //         this.setState({
          //           isVisible: false
          //         });
          //         this.requestList();
          //       }
          //     });
        }
      });
    }
  };
  render() {
    return (
      <div>
        <Card>
          <BaseForm
            formList={this.formList}
            filterSubmit={this.handleFilterSubmit}
          ></BaseForm>
        </Card>
        <Card style={{ marginTop: 10 }}>
          <Button
            type="primary"
            icon="plus"
            onClick={() => this.handleOperator("create")}
          >
            创建员工
          </Button>
          <Button icon="edit" onClick={() => this.handleOperator("edit")}>
            编辑员工
          </Button>
          <Button onClick={() => this.handleOperator("detail")}>
            员工详情
          </Button>
          <Button
            type="danger"
            icon="delete"
            onClick={() => this.handleOperator("delete")}
          >
            删除员工
          </Button>
        </Card>
        <div className="content-wrap">
          <ETable
            columns={UserColumn.getColumns()}
            dataSource={this.state.list}
            pagination={this.state.pagination}
            selectedRowKeys={this.state.selectedRowKeys}
            updateSelectedItem={Utils.updateSelectedItem.bind(this)}
          ></ETable>
        </div>
        <Modal
          title={this.state.title}
          visible={this.state.isVisible}
          onOk={this.handleSubmit}
          width={800}
          onCancel={() => {
            this.userForm.props.form.resetFields();
            this.setState({
              isVisible: false,
              userInfo: ""
            });
          }}
        >
          <UserForm
            userInfo={this.state.userInfo}
            type={this.state.type}
            wrappedComponentRef={inst => (this.userForm = inst)}
          />
        </Modal>
      </div>
    );
  }
}
class UserForm extends React.Component {
  getState = state => {
    return {
      "1": "咸鱼一条",
      "2": "风华浪子",
      "3": "北大才子一枚",
      "4": "百度FE",
      "5": "创业者"
    }[state];
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 16 }
    };
    const userInfo = this.props.userInfo || {};
    const type = this.props.type;
    return (
      <Form layout="horizontal">
        <FormItem label="姓名" {...formItemLayout}>
          {userInfo && type == "detail"
            ? userInfo.username
            : getFieldDecorator("user_name", {
                initialValue: userInfo.username
              })(<Input type="text" placeholder="请输入姓名" />)}
        </FormItem>
        <FormItem label="性别" {...formItemLayout}>
          {userInfo && type == "detail"
            ? userInfo.sex == 1
              ? "男"
              : "女"
            : getFieldDecorator("sex", {
                initialValue: userInfo.sex
              })(
                <RadioGroup>
                  <Radio value={1}>男</Radio>
                  <Radio value={2}>女</Radio>
                </RadioGroup>
              )}
        </FormItem>
        <FormItem label="状态" {...formItemLayout}>
          {userInfo && type == "detail"
            ? this.getState(userInfo.state)
            : getFieldDecorator("state", {
                initialValue: userInfo.state
              })(
                <Select>
                  <Option value={1}>咸鱼一条</Option>
                  <Option value={2}>风华浪子</Option>
                  <Option value={3}>北大才子一枚</Option>
                  <Option value={4}>百度FE</Option>
                  <Option value={5}>创业者</Option>
                </Select>
              )}
        </FormItem>
        <FormItem label="生日" {...formItemLayout}>
          {userInfo && type == "detail"
            ? userInfo.birthday
            : getFieldDecorator("birthday", {
                initialValue: Moment(userInfo.birthday)
              })(<DatePicker />)}
        </FormItem>
        <FormItem label="联系地址" {...formItemLayout}>
          {userInfo && type == "detail"
            ? userInfo.address
            : getFieldDecorator("address", {
                initialValue: userInfo.address
              })(<Input.TextArea rows={3} placeholder="请输入联系地址" />)}
        </FormItem>
      </Form>
    );
  }
}
UserForm = Form.create({})(UserForm);
